import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  base: "./", //資源路徑改為相對
  server: {
    host: "0.0.0.0",
    port: 9015,
  },
});
