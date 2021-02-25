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

<script lang="ts">
export default {
  head: {
    title: "Sebastian Pernthaler",
    htmlAttrs: {
      lang: "de",
    },
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "author",
        href: "/humans.txt"
      }
    ],
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      },
      {
        name: "description",
        content: "Software-Entwickler"
      }
    ]
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