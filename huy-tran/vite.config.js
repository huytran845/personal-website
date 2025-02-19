import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// Server config is so that changes are polled while in dev environment so changes could be perceived without restarting server on WSL2 with Windows Subsystem.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
});
