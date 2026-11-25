// Worst Fix Ever: Funniest Commit Message
// Writes one commit message for a bug fix that made everything worse.
// Deterministic, stdlib only, no network at runtime.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry line: one concrete incident, deadpan, in the voice of a tired
// engineer. The fix for a crashing login page was to delete the login page,
// so the crash is gone and nobody can log in at all.
const ENTRY =
  "fix: stop login page crashing by deleting the login page";

const OUTPUT_PATH = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";

function main(): void {
  const line = ENTRY.trim();
  if (line.length < 1 || line.length > 100) {
    throw new Error(`entry must be 1-100 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line + "\n", "utf8");
  console.log(line);
}

main();
