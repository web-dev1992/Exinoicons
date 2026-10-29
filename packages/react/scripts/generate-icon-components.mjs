import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import * as icons from "@exinoicons/core-free-icons";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const outputDirectory = path.resolve(scriptDirectory, "../src/icons");

const iconNames = Object.keys(icons)
  .filter((name) => /^[A-Za-z_$][\w$]*$/.test(name))
  .filter((name) => Array.isArray(icons[name]))
  .sort();

if (iconNames.length === 0) {
  throw new Error(
    "No icon definitions found. Check @exinoicons/core-free-icons exports.",
  );
}

const usedFileNames = new Set();
const fileNames = new Map();

for (const name of iconNames) {
  let fileName = name;
  let suffix = 2;

  while (usedFileNames.has(fileName.toLowerCase())) {
    fileName = `${name}__${suffix++}`;
  }

  usedFileNames.add(fileName.toLowerCase());
  fileNames.set(name, fileName);
}

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const name of iconNames) {
  const fileName = fileNames.get(name);

  const source = `// AUTO-GENERATED. DO NOT EDIT.

import { ${name} as iconData } from '@exinoicons/core-free-icons';
import { createIconComponent } from '../createIconComponent';

export const ${name} = createIconComponent(iconData);
`;

  await writeFile(
    path.join(outputDirectory, `${fileName}.tsx`),
    source,
    "utf8",
  );
}

const barrel = iconNames
  .map((name) => `export { ${name} } from './${fileNames.get(name)}';`)
  .join("\n");

await writeFile(
  path.join(outputDirectory, "index.ts"),
  `// AUTO-GENERATED. DO NOT EDIT.\n\n${barrel}\n`,
  "utf8",
);

console.log(`Generated ${iconNames.length} icon components.`);
