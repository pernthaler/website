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
                matomoUrl: process.env.MATOMO_URL,
                siteId: process.env.SITE_ID
            }
        ]
    ]
}