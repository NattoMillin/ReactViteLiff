import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  root: "/",
  base: "/",
  publicDir: "public",
  plugins: [react()],
  build: {
    // `root` からの相対パスで指定する
    outDir: "/dist",
  },
  envDir: "/",
});
