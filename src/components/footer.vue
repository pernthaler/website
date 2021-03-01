<i18n>
{
  "en": {
    "imprint": "Imprint",
    "privacy": "Privacy Policy",
    "notice-1": "This website was created with",
    "notice-2": "and is"
  },
  "de": {
    "imprint": "Impressum",
    "privacy": "Datenschutzerklärung",
    "notice-1": "Diese Website wurde mit",
    "notice-2": "erstellt und ist"
  }
}
</i18n>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <ul>
            <li><nuxt-link :to="switchLocalePath('en')">English</nuxt-link></li>
            <li><nuxt-link :to="switchLocalePath('de')">German</nuxt-link></li>
          </ul>
          <p>{{ $t("notice-1") }} <a href="https://vuejs.org/" target="_blank" ref="noopener noreferrer nofollow">Vue.js</a> {{ $t("notice-2") }} <a href="https://github.com/Pernthaler/Website" target="_blank" ref="noopener noreferrer nofollow">Open Source</a>.</p>

          <ul>
            <li><nuxt-link :to="localePath('imprint')">{{ $t("imprint") }}</nuxt-link></li>
            <li><nuxt-link :to="localePath('privacy')">{{ $t("privacy") }}</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  min-height: 50px;
}
p, a, ul {
  margin: 0;
  padding: 0;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    display: inline;
  }
}
</style>