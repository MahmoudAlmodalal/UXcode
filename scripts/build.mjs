import { mkdir, rm, cp, access } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist");

const filesToCopy = [
  "index.html",
  "privacy.html",
  "terms.html",
  "robots.txt",
  "sitemap.xml"
];

const dirsToCopy = ["css", "js", "images", "fonts"];

async function pathExists(targetPath) {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function copyItems(items, isDirectory) {
  for (const item of items) {
    const from = path.join(root, item);
    const exists = await pathExists(from);
    if (!exists) {
      console.warn(`Skipping missing ${isDirectory ? "directory" : "file"}: ${item}`);
      continue;
    }

    const to = path.join(distDir, item);
    await cp(from, to, { recursive: isDirectory });
  }
}

async function build() {
  await rm(distDir, { recursive: true, force: true });
  await mkdir(distDir, { recursive: true });

  await copyItems(filesToCopy, false);
  await copyItems(dirsToCopy, true);

  console.log("Build complete. Output directory: dist/");
}

build().catch((error) => {
  console.error("Build failed.");
  console.error(error);
  process.exitCode = 1;
});
