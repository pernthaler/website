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
@font-face {
  font-family: TitilliumWeb;
  src: url("/fonts/TitilliumWeb/TitilliumWeb-Regular.ttf");
}
@font-face {
  font-family: Anton;
  src: url("/fonts/Anton/Anton-Regular.ttf");
}

html, body, #__nuxt, #__layout, #__layout > div {
  #__layout > div {
    padding: 0;
    margin: 0;
    display:flex;
    flex-direction:column;
  }
  min-height: 100vh;
}

html {
  scroll-behavior: smooth;
}
body {
  word-wrap: break-word;
}
h1, h2, h3, h4, h5, h6 {
  font-family: Arimo, sans-serif;
}
p, span, li {
  font-family: TitilliumWeb, sans-serif;
  text-align: justify;
}
</style>