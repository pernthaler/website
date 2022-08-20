import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import WindiCSS from "vite-plugin-windicss";
import generateSitemap from "vite-ssg-sitemap";

export default defineConfig({
    publicDir: path.join("src", "public"),
    plugins: [
        Vue(),
        Pages(),
        Layouts(),
        WindiCSS()
    ],
    resolve: {
        alias: {
            "@": path.resolve("src")
        }
    },
    server: {
        port: 8080,
        host: "0.0.0.0"
    },
    build: {
        outDir: path.join("..", "server", "dist"),
        emptyOutDir: true
    },
    // @ts-ignore
    ssgOptions: {
        formatting: "minify",
        dirStyle: "nested",
        onFinished() {
            generateSitemap({
                hostname: "https://sebastian.pernthaler.me",
                outDir: path.join("..", "server", "dist")
            })
        }
    }
});