import { ViteSSG } from "vite-ssg";
import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";
import "virtual:windi.css";
import "@fontsource/noto-mono/index.css";
import App from "./App.vue";

const routes = setupLayouts(generatedRoutes);
export const createApp = ViteSSG(App, { routes });