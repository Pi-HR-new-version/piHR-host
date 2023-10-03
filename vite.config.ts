import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "auth",
      filename: "remoteEntry.js",
      remotes: {
        auth: "http://localhost:5010/assets/remoteEntry.js",
        navbar: "http://localhost:5001/assets/remoteEntry.js",
        // navbar: "https://pihr-mf-navbar.vercel.app/assets/remoteEntry.js",
      },
      exposes: {},
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: "esm",
        entryFileNames: "assets/[name].js",
        minifyInternalExports: false,
      },
    },
  },
});
