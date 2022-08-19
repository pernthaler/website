<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
    text: string,
    icon: string,
    link: string
}>();
</script>

<template>
    <a :href="link" target="_blank" ref="noopener noreferrer" class="relative inline-flex items-center gap-1 text-neutral-500 animation">
        <Icon :icon="icon"/>
        <span>{{ text }}</span>
    </a>
</template>

<style scoped lang="less">
.animation {
    &:after {
        @apply absolute bottom-0 left-0 w-full bg-gray-500;
        content: "";
        height: 2px;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.25s ease-in-out;
    }
    
    &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
}
</style>