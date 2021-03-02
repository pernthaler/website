<i18n>
{
  "en": {
    "legal": "Legal Notice",
    "privacy": "Privacy Policy",
    "notice": "This website was created with |Vue.js| and is |open source|."
  },
  "de": {
    "legal": "Impressum",
    "privacy": "Datenschutzerklärung",
    "notice": "Diese Webseite wurde mit |Vue.js| erstellt und ist |Open Source|."
  }
}
</i18n>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <ul>
            <li><nuxt-link :to="switchLocalePath('en')"><span aria-label="English" class="flag-icon flag-icon-us"/></nuxt-link></li>
            <li><nuxt-link :to="switchLocalePath('de')"><span aria-label="German" class="flag-icon flag-icon-de"/></nuxt-link></li>
          </ul>
          <p>{{ $t("notice").split("|")[0] }}<a href="https://vuejs.org/" target="_blank" rel="noopener">{{ $t("notice").split("|")[1] }}</a>{{ $t("notice").split("|")[2] }}<a href="https://github.com/Pernthaler/Website" target="_blank" rel="noopener">{{ $t("notice").split("|")[3] }}</a>{{ $t("notice").split("|")[4] }}</p>
          <ul>
            <li><nuxt-link :to="localePath('legal')">{{ $t("legal") }}</nuxt-link></li>
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
.flag-icon {
  border-radius: 2px;
  font-size: 20px;
}
</style>