import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      constants: "/src/constants",
      reducers: "/src/store/reducer",
      store: "/src/store",
      types: "/src/types",
      lib: "/src/lib",
    },
  },
});
