export default {
    srcDir: "src",
    components: true,
    telemetry: false,
    server: {
        host: "0.0.0.0"
    },
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
        "@nuxtjs/style-resources",
        "nuxt-animejs",
        [ "@nuxtjs/fontawesome", {
            component: "fa",
            suffix: true,
            icons: {
                solid: [ "faHome", "faUser", "faEnvelope", "faBalanceScale", "faUserSecret" ],
                brands: [ "faGithub", "faLinkedin" ]
            }
        }]
    ],
    styleResources: {
      less: "./assets/less/*.less"
    },
    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ["font"].includes(type);
            }
        }
    }
}