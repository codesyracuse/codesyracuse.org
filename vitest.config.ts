import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import jsconfigPaths from "vite-jsconfig-paths";

export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  test: {
    globals: true,
    setupFiles: ["./test/setup-test-env.js"],
    environment: "jsdom",
  },
});
