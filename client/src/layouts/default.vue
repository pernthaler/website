<script setup lang="ts">
import Background from "../components/Background.vue";
</script>

<template>
    <div class="h-full flex flex-col justify-center items-center gap-10 text-center">
        <Background/>
        <RouterView/>
    </div>
</template>

<style lang="less">
* {
    font-family: "Noto Mono", monospace;
    
    &::selection {
        @apply bg-white text-black;
    }
}

html, body, #app {
    @apply h-full;
}

body {
    @apply bg-black text-white;
}

h1, h2 {
    text-shadow: 0 0 5px white;
}

::-webkit-scrollbar {
    @apply w-1;
}

::-webkit-scrollbar-thumb {
    @apply bg-white rounded;
}
</style>