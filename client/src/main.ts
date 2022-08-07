import { ViteSSG } from "vite-ssg/single-page";
// @ts-ignore
import App from "./App.vue"

export const createApp = ViteSSG(App)