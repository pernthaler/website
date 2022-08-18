<script setup lang="ts">
import Background from "../components/Background.vue";
</script>

<template>
    <div id="container" class="h-full flex flex-col justify-center items-center gap-10 text-center">
        <Background/>
        <RouterView/>
    </div>
</template>

<style lang="stylus">
html, body, #app {
  height: 100%;
}

body {
  color: white;
  background-color: black;
  font-family: "Noto Mono", monospace;
}

h1, h2 {
  text-shadow: 0 0 5px white;
}
</style>