export default {
    srcDir: "src",
    components: true,
    server: {
        host: "0"
    },
    plugins: [
        "~/plugins/fontawesome.js"
    ],
    modules: [
        [ "nuxt-i18n", {
            vueI18nLoader: true
        }],
        [ "nuxt-matomo", {
            matomoUrl: process.env.MATOMO_URL,
            siteId: process.env.SITE_ID
        }],
        "cookie-universal-nuxt",
        "@nuxtjs/sitemap"
    ],
    i18n: {
        locales: [
            { code: "en", iso: "en-US" },
            { code: "de", iso: "de-DE" }
        ],
        detectBrowserLanguage: {
            fallbackLocale: "en",
            useCookie: true,
            alwaysRedirect: true,
            cookieKey: "language"
        }
    },
    buildModules: [
        "@aceforth/nuxt-optimized-images",
        "nuxt-purgecss",
        "@nuxtjs/pwa"
    ],
    optimizedImages: {
        optimizeImages: true
    },
    purgeCSS: {
        whitelistPatterns: [/(^|\.)fa-/, /-fa($|\.)/]
    },
    pwa: {
        manifest: {
            name: "Sebastian Pernthaler",
            short_name: "Pernthaler",
            description: "Software-Developer"
        }
    },
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
        "@fortawesome/fontawesome-svg-core/styles.css",
        "flag-icon-css/sass/flag-icon.scss"
    ],
    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ["font"].includes(type);
            }
        }
    }
}