export default {
    srcDir: "src",
    components: true,
    server: {
        host: "0"
    },
    css: [
        "@getbase/base/core.css",
        "@getbase/base/code.css",
        "@getbase/base/forms.css",
        "@getbase/base/tables.css",
        "@getbase/base/typography.css",
        "@getbase/base/headings.css",
        "@getbase/base/containers.css",
        "@getbase/base/grid.css",
        "@getbase/base/horizontal-spacers.css",
        "@getbase/base/vertical-spacers.css",
        "@getbase/base/spacers.css",
        "@getbase/base/display-helpers.css",
        "@getbase/base/flex-helpers.css",
        "@getbase/base/position-helpers.css",
        "@getbase/base/typography-helpers.css",
        "@fortawesome/fontawesome-svg-core/styles.css"
    ],
    plugins: [
        "~/plugins/fontawesome.js"
    ],
    modules: [
        [
            "nuxt-matomo",
            {
                matomoUrl: process.env.MATOMO_URL,
                siteId: process.env.SITE_ID
            }
        ]
    ]
}