<script setup lang="ts">
import { defineProps } from "vue";
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
    @apply bg-neutral-500;
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
}
</style>