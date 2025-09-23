import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: "esbuild", // avoid terser entirely
    sourcemap: false
  },
  server: {
    host: '0.0.0.0',
    port: 5179,
    strictPort: true,
    allowedHosts: [
      '5179-661527b8-ecc4-4fad-ae86-abf7d3e60ae7.h3007.daytona.work',
      'localhost',
      '127.0.0.1'
    ]
  },
  base: "/"
});