import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    proxy: {
      "/api": "http://localhost:3030/",
    },
  },
});

// if no baseUrl provided, our frontend url will behave as backend url.
// if anything /api is there, proxy will add what is defined above.
