import { defineNuxtPlugin } from "#app";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faXing, faLinkedin } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;
library.add(faEnvelope, faGithub, faXing, faLinkedin);

export default defineNuxtPlugin((nuxtApp) => {
    // @ts-ignore
    nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});