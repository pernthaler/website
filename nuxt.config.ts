import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  srcDir: "src",
  components: true,
  telemetry: false,
  server: {
    host: "0.0.0.0"
  },
  modules: [
    [ "@nuxtjs/i18n", {
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
    "@nuxt/typescript-build",
    "@nuxtjs/style-resources",
    "nuxt-animejs",
    [ "@nuxtjs/fontawesome", {
      component: "fa",
      suffix: true,
      icons: {
        solid: [ "faAngleRight", "faExternalLinkAlt", "faUser", "faBalanceScale", "faUserSecret" ]
      }
    }]
  ],
  styleResources: {
    less: "./assets/less/*.less"
  },
  build: {
    babel: {
      plugins: [
        [ "@babel/plugin-proposal-private-methods", { "loose": true } ]
      ]
    }
  },
  render: {
    bundleRenderer: {
      shouldPreload: (type) => {
        return ["font"].includes(type);
      }
    }
  }
};

export default config;