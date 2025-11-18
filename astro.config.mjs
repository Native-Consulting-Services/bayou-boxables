// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import million from "million/compiler";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      million.vite({
        mode: "react",
        server: true,
        auto: true,
        // Additional optimizations
        telemetry: false, // Disable telemetry for privacy
      }),
    ],
  },

  integrations: [react()],
  output: "static",
  site: "https://bayouboxables.com",

  // GitHub Pages deployment configuration
  // This will be overridden by the GitHub Actions workflow
  base: process.env.NODE_ENV === "production" ? "/" : "/",
});
