import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import vue from "@astrojs/vue";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// @ts-check
// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      extensions: ["vue", ".tsx", ".jsx", ".mjs", ".astro", ".ts", ".js", ".json", ".md"],
    },
  },

  integrations: [vue()],
});
