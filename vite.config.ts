import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import postcssNesting from "postcss-nesting";
export default defineConfig({
  plugins: [sveltekit()],
  base: process.env.NODE_ENV === "production" ? `/port-authority-2024` : "", //資源路徑改為相對
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
});
