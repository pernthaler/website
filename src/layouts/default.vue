<i18n>
{
  "en": {
    "description": "Software-Developer"
  },
  "de": {
    "description": "Software-Entwickler"
  }
}
</i18n>

<template>
  <div>
    <Scrollbar/>
    <Transition/>
    <Navbar/>
    <main>
      <div class="container">
        <Nuxt/>
      </div>
    </main>
    <Footer/>
    <Cookie/>
  </div>
</template>

<script>
export default {
  head() {
    this.$i18n.__baseUrl = this.$store.state.domain;
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: (this.$store.state.title ? this.$store.state.title + " - " : "") + "Sebastian Pernthaler",
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
        lang: this.$i18n.locale
      },
      link: [
        { hid: "icon", rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { hid: "author", rel: "author", href: "/humans.txt" },
        ...i18nHead.link
      ],
      meta: [
        { hid: "charset", charset: "utf-8" },
        { hid: "viewport", name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { hid: "msapplication-config", name: "msapplication-config", content: "/browserconfig.xml" },
        { hid: "author", name: "author", content: "Sebastian Pernthaler" },
        { hid: "description", name: "description", content: this.$t("description") },
        { hid: "theme-color", name: "theme-color", content: "#0000FF" },
        { hid: "color-scheme", name: "color-scheme", content: "light" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:title", property: "og:title", content: this.$store.state.title || "Sebastian Pernthaler" },
        { hid: "og:site_name", property: "og:site_name", content: "Sebastian Pernthaler" },
        { hid: "og:description", property: "og:description", content: this.$t("description") },
        { hid: "og:image", property: "og:image", content: this.$store.state.domain + "/icon.png" },
        { hid: "og:url", property: "og:url", content: this.$store.state.domain + this.$route.fullPath },
        { hid: "twitter:card", name: "twitter:card", content: "summary" },
        { hid: "twitter:title", name: "twitter:title", content: this.$store.state.title || "Sebastian Pernthaler" },
        { hid: "twitter:description", name: "twitter:description", content: this.$t("description") },
        { hid: "twitter:image", name: "twitter:image", content: this.$store.state.domain + "/icon.png" },
        ...i18nHead.meta
      ]
    };
  }
}
</script>

<style lang="scss">
@import "~assets/scss/theme.scss";

html, body, #__nuxt, #__layout, #__layout > div {
  min-height: 100vh;
}
html {
  scroll-behavior: smooth;
}
body {
  word-wrap: break-word;
  background-color: $background-dark;
}
#__layout > div {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

h1, h2, h3, h4, h5, h6 {
  font-family: $font-header, sans-serif;
}
p, span, li {
  font-family: $font-default, sans-serif;
  text-align: justify;
}
a, a:visited {
  color: $primary-light;
  text-decoration: none;

  &:hover {
    color: $primary-dark;
  }
}

::selection {
  color: $primary-light;
  background-color: $secondary-light;
}
</style>