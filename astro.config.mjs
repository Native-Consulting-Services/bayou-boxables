// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
  output: "static",
  site: "https://bayouboxables.com",
  
  // GitHub Pages deployment configuration
  // This will be overridden by the GitHub Actions workflow
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
});
