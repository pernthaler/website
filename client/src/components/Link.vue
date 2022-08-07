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
    <a :href="link" target="_blank" ref="noopener noreferrer" class="text-neutral-500 flex items-center gap-1">
        <Icon :icon="icon"/>
        <span>{{ text }}</span>
    </a>
</template>