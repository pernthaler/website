import serveStatic from "serve-static";

export default {
    srcDir: "src",
    components: true,
    telemetry: false,
    server: {
        host: "0"
    },
    plugins: [
        "~/plugins/fontawesome.js"
    ],
    serverMiddleware: [
        { path: "/storybook", handler: serveStatic("storybook-static") }
    ],
    modules: [
        [ "nuxt-i18n", {
            vueI18nLoader: true,
            strategy: "prefix",
            defaultLocale: "en",
            locales: [
                { code: "de", name: "Deutsch", iso: "de-DE" },
                { code: "en", name: "English", iso: "en-US" }
            ],
            detectBrowserLanguage: {
                fallbackLocale: "en",
                useCookie: true,
                onlyOnRoot: true,
                alwaysRedirect: true,
                cookieKey: "language"
            }
        }],
        [ "nuxt-matomo", {
            matomoUrl: process.env.MATOMO_URL,
            siteId: process.env.SITE_ID
        }],
        "cookie-universal-nuxt",
        "@nuxtjs/sitemap"
    ],
    buildModules: [
        [ "@aceforth/nuxt-optimized-images", {
            optimizeImages: true
        }],
        [ "nuxt-purgecss", {
            whitelistPatterns: [
                /(^|\.)fa-/,
                /-fa($|\.)/
            ]
        }],
        [ "@nuxtjs/pwa", {
            manifest: {
                name: "Sebastian Pernthaler",
                short_name: "Pernthaler",
                description: "Software-Developer"
            }
        }],
        "nuxt-animejs"
    ],
    css: [
        "@getbase/base/scss/_mixins.scss",
        "@getbase/base/scss/core.scss",
        "@getbase/base/scss/code.scss",
        "@getbase/base/scss/forms.scss",
        "@getbase/base/scss/tables.scss",
        "@getbase/base/scss/typography.scss",
        "@getbase/base/scss/headings.scss",
        "@getbase/base/scss/containers.scss",
        "@getbase/base/scss/grid.scss",
        "@getbase/base/scss/horizontal-spacers.scss",
        "@getbase/base/scss/vertical-spacers.scss",
        "@getbase/base/scss/spacers.scss",
        "@getbase/base/scss/typography-helpers.scss",
        "@getbase/base/scss/display-helpers.scss",
        "@getbase/base/scss/flex-helpers.scss",
        "@getbase/base/scss/position-helpers.scss",
        "@fortawesome/fontawesome-svg-core/styles.css"
    ],
    build: {
        babel: {
            presets() {
                return [
                    [ "@nuxt/babel-preset-app", {
                        corejs: { version: 3 }
                    }]
                ];
            }
        }
    },
    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ["font"].includes(type);
            }
        }
    }
}