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
    <Navbar/>
    <main>
      <div class="container">
        <Nuxt/>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Sebastian Pernthaler",
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      link: [
        {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
        {rel: "author", href: "/humans.txt"}
      ],
      meta: [
        {charset: "utf-8"},
        {name: "viewport", content: "width=device-width, initial-scale=1.0"},
        {name: "msapplication-config", content: "/browserconfig.xml"},
        {name: "author", content: "Sebastian Pernthaler"},
        {name: "description", content: this.$t("description")},
        {name: "color-scheme", content: "light"},
        {property: "og:title", content: "Sebastian Pernthaler"},
        {property: "og:type", content: "website"},
        {property: "og:site_name", content: "Sebastian Pernthaler"},
        {property: "og:description", content: this.$t("description")},
        {name: "twitter:card", content: "summary"},
        {name: "twitter:title", content: "Sebastian Pernthaler"},
        {name: "twitter:description", content: this.$t("description")}
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
a {
  color: $primary-light;
  text-decoration: none;

  &:hover {
    color: $primary-dark;
  }
}
</style>