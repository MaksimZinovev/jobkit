#!/usr/bin/env node
// Merge pieces.template.html + intellihub-extracted-pieces.json -> index.html
// Zero dependencies. Run: node build.mjs
import { readFileSync, writeFileSync } from "node:fs";

const TEMPLATE = "pieces.template.html";
const DATA = "intellihub-extracted-pieces.json";
const OUTPUT = "index.html";
const TOKEN = "/*__PIECES_DATA__*/ null";

const json = readFileSync(DATA, "utf8");
const data = JSON.parse(json); // validate before building

const template = readFileSync(TEMPLATE, "utf8");
if (!template.includes(TOKEN)) {
  console.error(`Build failed: token ${TOKEN} not found in ${TEMPLATE}`);
  process.exit(1);
}

// </script> inside JSON strings would close the tag early; "\/" is a valid escape
const safe = json.trim().replace(/<\/script/gi, "<\\/script");
const out = template.replace(TOKEN, safe);

const pieces = Object.entries(data)
  .filter(([, v]) => Array.isArray(v))
  .reduce((n, [, v]) => n + v.length, 0);

writeFileSync(OUTPUT, out);
console.log(
  `Wrote ${OUTPUT} (${pieces} pieces, ${Object.keys(data).length - 1} categories).`,
);