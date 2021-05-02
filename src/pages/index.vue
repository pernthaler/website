<i18n>
{
  "en": {
    "subtitle": "This website is not in its final state and is constantly being improved."
  },
  "de": {
    "subtitle": "Diese Website ist nicht im finalen Zustand und wird stetig verbessert."
  }
}
</i18n>

<template>
  <div>
    <h1>Sebastian Pernthaler</h1>
    <p>{{ $t("subtitle") }}</p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("SET_TITLE", "");
  }
}
</script>