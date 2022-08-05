<script setup lang="ts">
const props = defineProps<{
    text: string,
    icon: string,
    link: string
}>();
</script>

<template>
    <a :href="link" target="_blank" ref="noopener noreferrer" class="relative">
        <span class="text-neutral-500"><span><FontAwesomeIcon :icon="icon"/></span> {{ text }}</span>
        <span class="absolute h-0.5 -bottom-1 left-1/2 w-0 bg-neutral-500 transition-all"></span>
        <span class="absolute h-0.5 -bottom-1 right-1/2 w-0 bg-neutral-500 transition-all"></span>
    </a>
</template>

<style scoped lang="less">
a:hover span {
  width: 50%;
}
</style>