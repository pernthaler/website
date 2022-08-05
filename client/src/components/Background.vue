<script setup lang="ts">
import { ref, onMounted } from "vue";

const canvas = ref<HTMLCanvasElement>();
const time = ref<number>();
const width = ref<number>();
const height = ref<number>();
const stars = ref<{ x: number, y: number, z: number }[]>([]);

function frame(t: number) {
    const context = canvas.value.getContext("2d");
    const elapsed = t - time.value;

    for (const star of stars.value) {
        star.z -= elapsed * 0.1;
        while (star.z <= 1) {
            star.z += 1000;
        }
    }
    time.value = t;
    context.clearRect(0, 0, canvas.value.width, canvas.value.height);

    const w = width.value;
    const h = height.value;
    const wh = w / 2;
    const hh = h / 2;

    for (const star of stars.value) {
        const x = wh + star.x / (star.z * 0.001);
        const y = hh + star.y / (star.z * 0.001);
        if (x < 0 || x >= w || y < 0 || y >= h) {
            continue;
        }
        const d = star.z / 1000;
        const i = (1 - d * d) * 255;
        context.fillStyle = `rgb(${i}, ${i}, ${i})`;
        context.fillRect(x, y, 2, 2);
    }

    window.requestAnimationFrame(frame);
}

function resize() {
    width.value = document.body.clientWidth;
    height.value = document.body.clientHeight;
}

onMounted(() => {
    window.addEventListener("resize", resize);
    window.requestAnimationFrame(t => {
        for (let i = 0; i < 1000; i++) {
            stars.value.push({
                x: Math.random() * 1600 - 800,
                y: Math.random() * 900 - 450,
                z: Math.random() * 1000
            });
        }
        time.value = t;
        resize();
        window.requestAnimationFrame(frame);
    });
});
</script>

<template>
    <canvas ref="canvas" :width="width" :height="height" class="absolute -z-10"/>
</template>