<script setup lang="ts">
import { useHead } from "@vueuse/head";
import "@fontsource/noto-mono";

useHead({
    title: "Sebastian Pernthaler",
    htmlAttrs: {
        lang: "en"
    },
    meta: [
        { name: "theme-color",          content: "#ffffff" },
        { name: "color-scheme",         content: "dark" },
        { name: "msapplication-config", content: "/browserconfig.xml" },

        { name: "description",  content: "Software-Developer" },
        { name: "keywords",     content: "java, website, vue" },
        { name: "author",       content: "Sebastian Pernthaler" },

        { name: "og:title",       content: "Sebastian Pernthaler" },
        { name: "og:site_name",   content: "Sebastian Pernthaler" },
        { name: "og:description", content: "Software-Developer" },
        { name: "og:image",       content: "https://sebastian.pernthaler.me/favicon.png" },
        { name: "og:type",        content: "website" },
        { name: "og:url",         content: "https://sebastian.pernthaler.me" },

        { name: "twitter:title",        content: "Sebastian Pernthaler" },
        { name: "twitter:description",  content: "Software-Developer" },
        { name: "twitter:image",        content: "https://sebastian.pernthaler.me/favicon.png" },
        { name: "twitter:card",         content: "summary" },
    ],
    link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "author", href: "/humans.txt" }
    ]
});
</script>

<template>
    <slot/>
</template>

<style lang="less">
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #__nuxt {
  height: 100%;
}

body {
  color: white;
  background-color: black;
  font-family: "Noto Mono", monospace;
}
</style>