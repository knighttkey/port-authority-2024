import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import postcssNesting from "postcss-nesting";
import path from 'path';
export default defineConfig({
  plugins: [sveltekit()],
  base: "./", //資源路徑改為相對
  define: { "process.env": {} },
  server: {
    host: "0.0.0.0",
    port: 9015,
  },
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
  build: {
    outDir: 'docs', // 指定构建输出目录为 docs
    manifest: true,
  },
});
