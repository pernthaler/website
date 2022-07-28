<script setup lang="ts">
useHead({
  title: "Sebastian Pernthaler"
});
</script>

<template>
  <slot/>
</template>

<style lang="less">
html, body, #__nuxt {
  height: 100%;
}
body {
  margin: 0;
  color: white;
  background-color: black;
}
</style>