<i18n locale="en">
{
  "contact": "Contact",
  "legal": "Legal Notice",
  "privacy": "Privacy Policy"
}
</i18n>

<i18n locale="de">
{
  "contact": "Kontakt",
  "legal": "Impressum",
  "privacy": "Datenschutzerklärung"
}
</i18n>

<template>
    <footer>
      <p>{{ $store.state.name }} ({{ $store.state.revision }}) v{{ $store.state.version }}</p>
      <select aria-label="Languages" v-model="selected" v-on:change="$router.push(switchLocalePath(selected))">
        <option v-for="locale of $i18n.locales" v-bind:key="locale.code" :selected="selected === locale.code" :value="locale.code">{{ locale.name }}</option>
      </select>
      <ul>
        <li><a href="mailto:Sebastian Pernthaler <sebastian@pernthaler.me>"><fa-icon :icon="['fas', 'external-link-alt']"/> {{ $t("contact") }}</a></li>
        <li><nuxt-link :to="localePath('legal')"><fa-icon :icon="['fas', 'angle-right']"/> {{ $t("legal") }}</nuxt-link></li>
        <li><nuxt-link :to="localePath('privacy')"><fa-icon :icon="['fas', 'angle-right']"/> {{ $t("privacy") }}</nuxt-link></li>
      </ul>
    </footer>
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
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  li {
    margin: 10px;
  }
}
</style>