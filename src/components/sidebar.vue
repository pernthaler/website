<i18n>
{
  "en": {
    "about": "About Me",
    "source": "Source Code",

    "contact": "Contact",
    "legal": "Legal Notice",
    "privacy": "Privacy Policy"
  },
  "de": {
    "about": "Über Mich",
    "source": "Quellcode",

    "contact": "Kontakt",
    "legal": "Impressum",
    "privacy": "Datenschutzerklärung"
  }
}
</i18n>

<template>
    <div id="sidebar">
        <div id="logo">
          <nuxt-link :to="localePath('/')"><img src="~assets/img/logo.svg" alt="Logo" width="40px" height="40px"/></nuxt-link>
        </div>
        <nav>
            <ul>
                <li><nuxt-link :to="localePath('about')">{{ $t("about") }}</nuxt-link></li>
                <li><a href="https://github.com/Pernthaler/Website" target="_blank" rel="noopener">{{ $t("source") }}</a></li>
                <li><a href="https://www.linkedin.com/in/pernthaler/" target="_blank" rel="noopener">LinkedIn</a></li>
            </ul>
        </nav>
        <footer>
            <select aria-label="Languages" v-model="selected" v-on:change="$router.push(switchLocalePath(selected))">
              <option v-for="locale of $i18n.locales" :selected="selected === locale.code" :value="locale.code">{{ locale.name }}</option>
            </select>
            <ul>
                <li><a href="mailto:Sebastian Pernthaler <sebastian@pernthaler.me>">{{ $t("contact") }}</a></li>
                <li><nuxt-link :to="localePath('legal')">{{ $t("legal") }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('privacy')">{{ $t("privacy") }}</nuxt-link></li>
            </ul>
        </footer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      selected: this.$i18n.localeProperties.code
    };
  }
}
</script>

<style lang="less" scoped>
#sidebar {
  background-color: @background-dark;
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
}
#logo {
  display: flex;
  justify-content: center;
}
</style>