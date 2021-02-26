export default {
    srcDir: "src",
    components: true,
    server: {
        host: "0"
    },
    plugins: [
        "~/plugins/fontawesome.ts"
    ],
    modules: [
        [
            "nuxt-matomo",
            {
                matomoUrl: process.env.MATOMO_URL,
                siteId: process.env.SITE_ID
            }
        ]
    ],
    buildModules: [
        "@nuxt/typescript-build"
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
    ]
}