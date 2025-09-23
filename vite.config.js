import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: "esbuild",
    sourcemap: false
  },
  base: "/" // Changed from "./" to "/" for proper path resolution
});