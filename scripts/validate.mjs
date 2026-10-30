#!/usr/bin/env node
// Validates every skill folder: node scripts/validate.mjs
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const SKIP = new Set(["docs", "scripts", "node_modules"]);
const problems = [];
const fail = (m) => problems.push(m);
const CREDENTIAL = /(eyJ[A-Za-z0-9_-]{10,}|-----BEGIN [A-Z ]*KEY-----|\b(?:api[_-]?key|secret|password|bearer)\s*[:=]\s*\S{6,})/i;

const dirs = readdirSync(root).filter((d) => !d.startsWith(".") && !SKIP.has(d) && statSync(join(root, d)).isDirectory());
if (!dirs.length) fail("no skills found");
for (const d of dirs) {
  const file = join(root, d, "SKILL.md");
  if (!existsSync(file)) { fail(`${d}: SKILL.md is missing`); continue; }
  const text = readFileSync(file, "utf8");
  const m = text.match(/^---\nname: (.+)\ndescription: (.+)\n---\n/);
  if (!m) { fail(`${d}: needs frontmatter with name and description`); continue; }
  if (m[1] !== d) fail(`${d}: name "${m[1]}" does not match the folder`);
  if (m[2].length < 80 || m[2].length > 400) fail(`${d}: description is ${m[2].length} characters (want 80 to 400)`);
  // The description is an unquoted YAML value: ": " or " #" inside it makes the frontmatter invalid and the skills CLI skips the skill.
  if (/: | #/.test(m[2]) || /^[!&*\[\]{}|>'"%@`]/.test(m[2])) fail(`${d}: description is not valid as a plain YAML value (no ": " or " #", no leading special character)`);
  if (!/^# /m.test(text)) fail(`${d}: missing a title`);
  if (!text.includes("## Rules this skill always follows")) fail(`${d}: missing the shared safety rules`);
  if (!/Read-only/.test(text) || !/Verdict first/.test(text) || !/Supported/.test(text)) fail(`${d}: safety rules are incomplete`);
  if (CREDENTIAL.test(text)) fail(`${d}: looks like it contains a credential`);
  const refDir = join(root, d, "references");
  if (existsSync(refDir)) {
    for (const f of readdirSync(refDir)) {
      if (!/Status:\s*\*\*(DRAFT|VERIFIED)/.test(readFileSync(join(refDir, f), "utf8"))) fail(`${d}/references/${f}: must say Status: **DRAFT** or **VERIFIED**`);
    }
  }
}
for (const f of ["README.md", "LICENSE"]) if (!existsSync(join(root, f))) fail(`${f} is missing`);
if (problems.length) { console.error("Validation failed:"); for (const p of problems) console.error("  - " + p); process.exit(1); }
console.log(`OK (${dirs.length} skills)`);
