import * as esbuild from "@esbuild/mod.js";
import { denoPlugins } from "@oazmi/esbuild-plugin-deno";
import { join } from "@std/path";
import { inlineCSSPlugin } from "./pluginInlineCSS.ts";
import { reactCompilerPlugin } from "./reactCompilerPlugin.ts";
import { spicetifyShims } from "./spicetifyShimsPlugin.ts";
import { validateManifest } from "./manifestCheck.ts";

const getEntryFile = async (folderPath: string): Promise<string | null> => {
  const srcDir = join(folderPath, "src");
  try {
    for await (const dirEntry of Deno.readDir(srcDir)) {
      if (dirEntry.isFile && dirEntry.name.match(/^app\.(js|jsx|ts|tsx)$/)) {
        return join(srcDir, dirEntry.name);
      }
    }
  } catch (e) {
    if (!(e instanceof Deno.errors.NotFound)) {
      throw e;
    }
  }
  return null;
};

const resolveReactCompilerRuntime = (): esbuild.Plugin => ({
  name: "resolve-react-compiler-runtime",
  setup(build) {
    build.onResolve({ filter: /^react-compiler-runtime$/ }, () => {
      return {
        path: "react-compiler-runtime-stub",
        namespace: "react-compiler-runtime-ns",
      };
    });

    build.onLoad({ filter: /./, namespace: "react-compiler-runtime-ns" }, () => {
      return {
        contents: `
import * as React from "react";
import { useMemo } from "react";

const $empty = Symbol.for("react.memo_cache_sentinel");

export const c = typeof React.__COMPILER_RUNTIME?.c === "function"
  ? React.__COMPILER_RUNTIME.c
  : function c(size) {
      return useMemo(() => {
        const $ = new Array(size);
        for (let ii = 0; ii < size; ii++) {
          $[ii] = $empty;
        }
        $[$empty] = true;
        return $;
      }, []);
    };

export function $reset($) {
  for (let ii = 0; ii < $.length; ii++) {
    $[ii] = $empty;
  }
}

export function $makeReadOnly() {
  throw new Error("TODO: implement $makeReadOnly");
}

export function $structuralCheck() {}
`,
        loader: "js",
      };
    });
  },
});

const buildExtension = async (folderName: string, folderPath: string): Promise<void> => {
  const SRC = await getEntryFile(folderPath);
  if (!SRC) return;

  const OUT = join("dist", `${folderName}.mjs`);

  const ctx = await esbuild.context({
    entryPoints: [SRC],
    outfile: OUT,
    format: "esm",
    target: "esnext",
    platform: "browser",
    bundle: true,
    sourcemap: false,
    minify: true,
    jsx: "automatic",
    external: ["react", "react-dom/client", "react/jsx-runtime"],
    legalComments: "external",
    plugins: [
      resolveReactCompilerRuntime(),
      spicetifyShims(),
      inlineCSSPlugin({
        minify: true,
      }),
      ...denoPlugins({
        initialPluginData: {
          runtimePackage: "./deno.json",
        },
      }),
      reactCompilerPlugin(),
    ] as esbuild.Plugin[],
    banner: {
      js: "await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));",
    },
  });

  // Build and clean up
  await ctx.rebuild();
  await ctx.dispose();
};

const buildFolders = async (): Promise<void> => {
  const buildPromises: Promise<void>[] = [];

  for await (const dirEntry of Deno.readDir("extensions")) {
    if (dirEntry.isDirectory) {
      const folderPath = join("extensions", dirEntry.name);
      buildPromises.push(buildExtension(dirEntry.name, folderPath));
    }
  }

  await Promise.all(buildPromises);
};



const runBiome = async (): Promise<void> => {
  const formatCommand = new Deno.Command("deno", {
    args: ["task", "check"],
  });

  const { stdout } = await formatCommand.output();
  console.log("Biome:", new TextDecoder().decode(stdout));
};

const runBuilds = async (): Promise<void> => {
  const startTime = performance.now();

  console.log("Checking manifest...");
  validateManifest();

  console.log("Building extensions...");
  await buildFolders();

  console.log("Running biome...");
  await runBiome();

  const endTime = performance.now();
  const elapsed = ((endTime - startTime) / 1000).toFixed(2);

  console.log(`\x1b[33mBuild completed in ${elapsed} seconds.\x1b[0m`);

  Deno.exit(0);
};

await runBuilds();
