import { join } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    publicDir: join("src", "public"),
    plugins: [
        vue()
    ],
    server: {
      host: "0.0.0.0"
    },
    build: {
        outDir: join("dist", "static")
    }
});