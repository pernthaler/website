<i18n>
{
  "en": {
    "title": "Website",
    "subtitle": "This website was created with Vue.js and is open source."
  },
  "de": {
    "title": "Webseite",
    "subtitle": "Diese Webseite wurde mit Vue.js erstellt und ist Open Source."
  }
}
</i18n>

<template>
  <div class="row">
    <div class="col-12">
      <h1>{{ $t("title") }}</h1>
      <p>{{ $t("subtitle") }}</p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("SET_TITLE", this.$t("title"));
  },
  nuxtI18n: {
    paths: {
      en: encodeURI("/website"),
      de: encodeURI("/webseite")
    }
  }
}
</script>