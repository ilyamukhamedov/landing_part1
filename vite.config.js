import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: import.meta.env.VITE_BASE_PATH || "/",
  server: {
    port: 5173,
  },
});
console.log("hello");
