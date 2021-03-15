<i18n>
{
  "en": {
    "title": "About Me"
  },
  "de": {
    "title": "Über Mich"
  }
}
</i18n>

<template>
  <div class="row">
    <div class="col-12">
      <div class="LI-profile-badge" data-version="v1" data-size="large" :data-locale="$i18n.localeProperties.iso.replace('-', '_')" data-type="horizontal" data-theme="light" data-vanity="pernthaler">
        <a class="LI-simple-link" href="https://www.linkedin.com/in/pernthaler" target="_blank" rel="noopener">Sebastian Pernthaler</a>
      </div>
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
      en: encodeURI("/about-me"),
      de: encodeURI("/über-mich")
    }
  },
  head() {
    return {
      script: [
        {
          hid: "linkedin",
          type: "text/javascript",
          src: "https://platform.linkedin.com/badges/js/profile.js",
          async: true,
          defer: true
        }
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
.LI-profile-badge {
  display: flex;
  justify-content: center;
}
</style>