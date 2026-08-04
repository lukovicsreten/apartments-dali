// One-off script: copies source photos from "slike/<folder>/<n>/Untitled.*"
// into src/assets/apartments/<slug>/<NN>.<ext> with clean sequential names.
// Run with: node scripts/organize-images.mjs
import { readdirSync, statSync, mkdirSync, copyFileSync, existsSync } from "node:fs";
import { join, extname } from "node:path";

const ROOT = decodeURIComponent(new URL("..", import.meta.url).pathname).replace(/^\/([A-Za-z]):/, "$1:");

const MAP = [
  { src: "slike/slike studio sa terasom", slug: "studio-with-terrace" },
  { src: "slike/studio1", slug: "studio-1" },
  { src: "slike/studio2", slug: "studio-2" },
  { src: "slike/apartman prizemlje", slug: "ground-floor-apartment" },
  { src: "slike/apartman sa pogledom na vrt", slug: "garden-view-apartment" },
  { src: "slike/apartman sa jednom spavacom sobom", slug: "one-bedroom-apartment" },
];

for (const { src, slug } of MAP) {
  const srcDir = join(ROOT, src);
  const outDir = join(ROOT, "src", "assets", "apartments", slug);
  mkdirSync(outDir, { recursive: true });

  const numberedFolders = readdirSync(srcDir)
    .filter((name) => statSync(join(srcDir, name)).isDirectory())
    .sort((a, b) => Number(a) - Number(b));

  let index = 1;
  for (const folder of numberedFolders) {
    const folderPath = join(srcDir, folder);
    const files = readdirSync(folderPath).filter((f) =>
      [".png", ".jpg", ".jpeg"].includes(extname(f).toLowerCase())
    );
    if (files.length === 0) continue;

    // Prefer the largest file (highest quality / original export) when a folder
    // contains both a .jpg and a .png rendition of the same photo.
    const chosen = files
      .map((f) => ({ f, size: statSync(join(folderPath, f)).size }))
      .sort((a, b) => b.size - a.size)[0].f;

    const ext = extname(chosen).toLowerCase() === ".jpeg" ? ".jpg" : extname(chosen).toLowerCase();
    const outName = `${String(index).padStart(2, "0")}${ext}`;
    copyFileSync(join(folderPath, chosen), join(outDir, outName));
    index++;
  }

  console.log(`${slug}: copied ${index - 1} images`);
}
