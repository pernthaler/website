import { join } from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
    publicDir: join("src", "public"),
    plugins: [
        Vue(),
        WindiCSS()
    ],
    server: {
      host: "0.0.0.0"
    },
    build: {
        outDir: join("dist", "static")
    }
});