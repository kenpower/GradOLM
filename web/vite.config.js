import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: "..", // Change this to your preferred output folder
    emptyOutDir: false, // Optionally clean the folder before building
  },
});
