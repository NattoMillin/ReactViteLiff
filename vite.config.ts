import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./",
  base: "/ReactViteLiff/",
  publicDir: "public",
  plugins: [react()],
  build: {
    outDir: "./dist",
  },
  envDir: "./",
  server: {
    port: 3000
  },
});


//base: "/ReactViteLiff/",