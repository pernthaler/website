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
        port: 8080,
        host: "0.0.0.0"
    },
    build: {
        outDir: join("..", "server", "dist")
    },
    // @ts-ignore
    ssgOptions: {
        formatting: "minify"
    }
});