<script setup lang="ts">
import Background from "./components/Background.vue";
import Link from "./components/Link.vue";
</script>

<template>
    <div id="container" class="h-full flex flex-col justify-center items-center gap-10 text-center">
        <Background/>
        <h1 class="text-3xl font-bold uppercase word-spacing-full sm:word-spacing-normal">Sebastian Pernthaler</h1>
        <h2 class="text-xl">Software-Developer</h2>
        <ul class="flex flex-col sm:flex-row gap-5">
            <li><Link text="Contact" icon="carbon:email" link="mailto:sebastian@pernthaler.me"/></li>
            <li><Link text="GitHub" icon="carbon:logo-github" link="https://github.com/Pernthaler/Website"/></li>
            <li><Link text="Xing" icon="carbon:logo-xing" link="https://www.xing.com/profile/Sebastian_Pernthaler"/></li>
            <li><Link text="LinkedIn" icon="carbon:logo-linkedin" link="https://www.linkedin.com/in/pernthaler/"/></li>
        </ul>
    </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
    .word-spacing-normal {
        word-spacing: normal;
    }
    .word-spacing-full {
        word-spacing: 100vw;
    }
}

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