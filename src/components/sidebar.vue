<i18n>
{
  "en": {
    "home": "Home",
    "about": "About Me",
    "source": "Source Code",

    "contact": "Contact",
    "legal": "Legal Notice",
    "privacy": "Privacy Policy"
  },
  "de": {
    "home": "Startseite",
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
    <nav>
      <div id="logo">
        <nuxt-link :to="localePath('/')"><img src="~assets/img/logo.svg" alt="Logo" width="40px" height="40px"/></nuxt-link>
      </div>
      <ul>
        <li><nuxt-link :to="localePath('/')"><fa-icon :icon="['fas', 'home']"/> {{ $t("home") }}</nuxt-link></li>
        <li><nuxt-link :to="localePath('about')"><fa-icon :icon="['fas', 'user']"/> {{ $t("about") }}</nuxt-link></li>
        <li><a href="https://github.com/Pernthaler/Website" target="_blank" rel="noopener"><fa-icon :icon="['fab', 'github']"/> {{ $t("source") }}</a></li>
        <li><a href="https://www.linkedin.com/in/pernthaler/" target="_blank" rel="noopener"><fa-icon :icon="['fab', 'linkedin']"/> LinkedIn</a></li>
      </ul>
    </nav>
    <footer>
      <p>{{ $store.state.name }} ({{ $store.state.sha }}) v{{ $store.state.version }}</p>
      <select aria-label="Languages" v-model="selected" v-on:change="$router.push(switchLocalePath(selected))">
        <option v-for="locale of $i18n.locales" v-bind:key="locale.code" :selected="selected === locale.code" :value="locale.code">{{ locale.name }}</option>
      </select>
      <ul>
        <li><a href="mailto:Sebastian Pernthaler <sebastian@pernthaler.me>"><fa-icon icon="envelope"/> {{ $t("contact") }}</a></li>
        <li><nuxt-link :to="localePath('legal')"><fa-icon :icon="['fas', 'balance-scale']"/> {{ $t("legal") }}</nuxt-link></li>
        <li><nuxt-link :to="localePath('privacy')"><fa-icon :icon="['fas', 'user-secret']"/> {{ $t("privacy") }}</nuxt-link></li>
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
  min-width: 200px;
  display: flex;
  flex-direction: column;

  * {
    text-align: center;
  }
  p {
    margin: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  nav, footer {
    padding: 10px;
  }
  nav {
    flex: 1;

    #logo {
      display: flex;
      justify-content: center;
    }
  }
}
</style>