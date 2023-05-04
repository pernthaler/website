import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
	plugins: [
		sveltekit()
	],
	server: {
		port: 8080,
		strictPort: true,
		host: true
	}
});