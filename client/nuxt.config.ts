import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
    srcDir: "src",
    css: [
        "@fortawesome/fontawesome-svg-core/styles.css"
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {
                        content: [
                            "./**/src/**/*.vue"
                        ]
                    },
                    autoprefixer: {}
                }
            }
        }
    }
});