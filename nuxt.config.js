require("dotenv").config();

export default {
    srcDir: "src",
    target: "static",
    components: true,
    server: {
        host: "0"
    },
    modules: [
        [
            "nuxt-matomo",
            {
                matomoUrl: context.env.MATOMO_URL,
                siteId: context.env.SITE_ID
            }
        ]
    ]
}