import { ViteSSG } from "vite-ssg/single-page";
import "virtual:windi.css";
import "@fontsource/noto-mono/index.css";
import App from "./App.vue";

export const createApp = ViteSSG(App);