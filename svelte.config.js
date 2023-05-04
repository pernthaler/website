import path from "path";
import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { vitePreprocess } from "@sveltejs/kit/vite";
import autoprefixer from "autoprefixer";

/** @type {import("@sveltejs/kit").Config} */
export default {
    preprocess: [
        vitePreprocess(),
        preprocess({
            postcss: {
                plugins: [
                    autoprefixer
                ]
            }
        })
    ],
    kit: {
        adapter: adapter(),
        files: {
            assets: path.join("src", "static")
        }
    }
};