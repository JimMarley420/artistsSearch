import { indexOfNeedle, lastIndexOfNeedle } from "jsr:@std/bytes";
import { build, type Plugin } from "@esbuild/mod.js";
import { denoPlugins } from "@oazmi/esbuild-plugin-deno";
import { join } from "@std/path";

import { inlineCSSPlugin } from "./pluginInlineCSS.ts";
import { spicetifyShims } from "./spicetifyShimsPlugin.ts";
import { validateManifest } from "./manifestCheck.ts";

const APPDATA: string = Deno.env.get("APPDATA") || "";
const LOCALAPPDATA: string = Deno.env.get("LOCALAPPDATA") || "";
const SPICETIFY_OUT: string = join(APPDATA, "spicetify", "Extensions") || "";
const SPOTIFY_OUT: string = join(APPDATA, "Spotify", "Apps", "xpui", "extensions") || "";

async function getEntryFile(folderPath: string): Promise<string | null> {
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
}

const resolveReactCompilerRuntime = (): Plugin => ({
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

async function buildExtension(folderName: string, folderPath: string): Promise<void> {
  const SRC = await getEntryFile(folderPath);
  if (!SRC) return;

  const OUT = join("dist", `${folderName}.mjs`);
  await build({
    entryPoints: [SRC],
    outfile: OUT,
    format: "esm",
    target: "esnext",
    platform: "browser",
    bundle: true,
    sourcemap: "inline",
    minify: false,
    jsx: "automatic",
    external: ["react", "react-dom", "react-dom/client", "react/jsx-runtime"],
    plugins: [
      resolveReactCompilerRuntime(),
      spicetifyShims(),
      inlineCSSPlugin({
        minify: false,
      }),
      ...denoPlugins({
        initialPluginData: {
          runtimePackage: "./deno.json",
        },
      }),
    ] as Plugin[],
    banner: {
      js: "await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));",
    },
  });

  try {
    await Deno.mkdir(SPICETIFY_OUT, { recursive: true });
    await Deno.copyFile(OUT, join(SPICETIFY_OUT, `${folderName}.mjs`));
  } catch {
    // CI environment - skip copying to local Spicetify folder
  }
}

async function buildFolders(): Promise<void> {
  const buildPromises = [];
  for await (const dirEntry of Deno.readDir("extensions")) {
    if (dirEntry.isDirectory) {
      const folderPath = join("extensions", dirEntry.name);
      buildPromises.push(buildExtension(dirEntry.name, folderPath));
    }
  }
  await Promise.all(buildPromises);
}

const killSpotify = async (): Promise<void> => {
  await new Deno.Command("taskkill", {
    args: ["/F", "/IM", "spotify.exe"],
  }).output();
};

async function applyExtensions(): Promise<void> {
  const distDir = "dist";

  for await (const file of Deno.readDir(distDir)) {
    if (!file.isFile) continue;
    const sourceFile = join(distDir, file.name);
    await Deno.copyFile(sourceFile, join(SPOTIFY_OUT, file.name));
  }

  const bnkPath = join(LOCALAPPDATA, "Spotify", "offline.bnk");
  const data = await Deno.readFile(bnkPath);

  const target = new TextEncoder().encode("app-developer");
  const ascii2 = "2".charCodeAt(0);

  const firstIndex = indexOfNeedle(data, target);
  if (firstIndex !== -1) {
    const pos = firstIndex + target.length + 1;
    if (pos < data.length) {
      data[pos] = ascii2;
    }
  }

  const lastIndex = lastIndexOfNeedle(data, target);
  if (lastIndex !== -1) {
    const pos = lastIndex + target.length + 2;
    if (pos < data.length) {
      data[pos] = ascii2;
    }
  }

  await Deno.writeFile(bnkPath, data);
}

function startSpotify(): void {
  const spotifyExe = join(APPDATA, "Spotify", "Spotify.exe");
  new Deno.Command(spotifyExe, {
    detached: true,
  }).spawn();
  console.log("Spotify started.");
}

async function runBuilds(): Promise<void> {
  const startTime = performance.now();

  console.log("Checking manifest...");
  validateManifest();

  await buildFolders();

  if (Deno.args.includes("--dev")) {
    await killSpotify();
    const maxAttempts = 5;
    let delay = 100;
    let attempts = 0;
    while (attempts < maxAttempts) {
      try {
        await applyExtensions();
        break;
      } catch (e) {
        attempts++;
        if (attempts >= maxAttempts) {
          throw e;
        }
        await new Promise(r => setTimeout(r, delay));
        delay *= 2;
      }
    }
    startSpotify();
  }

  const endTime = performance.now();
  const elapsed = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`\x1b[33mAll builds completed in ${elapsed} seconds.\x1b[0m`);
  Deno.exit(0);
}

runBuilds();
