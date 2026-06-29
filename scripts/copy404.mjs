import { existsSync, copyFileSync } from "node:fs";

const source = existsSync("dist/index.html")
  ? "dist/index.html"
  : "dist/client/index.html";

const destination = existsSync("dist/index.html")
  ? "dist/404.html"
  : "dist/client/404.html";

copyFileSync(source, destination);

console.log(`Copied ${source} -> ${destination}`);
