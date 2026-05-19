import { existsSync } from "@std/fs";
import { join } from "@std/path";

interface ManifestEntry {
  name: string;
  preview?: string;
  usercss?: string;
  schemes?: string;
  readme?: string;
  main?: string;
  include?: string[];
}

function isLocalPath(path: string): boolean {
  return !path.startsWith("http://") && !path.startsWith("https://");
}

export function validateManifest(): void {
  const manifestPath = "manifest.json";
  if (!existsSync(manifestPath)) {
    console.log("\x1b[33mNo manifest.json found, skipping manifest check\x1b[0m");
    return;
  }

  const content = Deno.readTextFileSync(manifestPath);
  const entries: ManifestEntry[] = JSON.parse(content);
  let hasErrors = false;

  for (const entry of entries) {
    const fieldsToCheck: [string, string | undefined][] = [
      ["preview", entry.preview],
      ["usercss", entry.usercss],
      ["schemes", entry.schemes],
      ["readme", entry.readme],
    ];

    if (entry.include) {
      for (const url of entry.include) {
        if (isLocalPath(url)) {
          fieldsToCheck.push(["include", url]);
        }
      }
    }

    for (const [field, value] of fieldsToCheck) {
      if (!value || !isLocalPath(value)) continue;
      if (!existsSync(value)) {
        console.error(`\x1b[31m  ❌ ${entry.name}: ${field} "${value}" not found\x1b[0m`);
        hasErrors = true;
      }
    }
  }

  if (hasErrors) {
    console.error("\n\x1b[31mManifest validation failed: referenced files are missing\x1b[0m");
    Deno.exit(1);
  }

  console.log("\x1b[32m✓ manifest.json references valid\x1b[0m");
}

if (import.meta.main) {
  validateManifest();
}
