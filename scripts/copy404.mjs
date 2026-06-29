import { copyFileSync } from "node:fs";

copyFileSync(
  "dist/index.html",
  "dist/404.html"
);

console.log("Created GitHub Pages 404 fallback.");
