<i18n>
{
  "en": {
    "text": "This website uses cookies to ensure you get the best experience on our website.",
    "button": "Got it",
    "learn": "Learn more"
  },
  "de": {
    "text": "Diese Webseite verwendet Cookies, um sicherzustellen, dass Sie die bestmögliche Erfahrung auf unserer Webseite erzielen.",
    "button": "Verstanden",
    "learn": "Mehr erfahren"
  }
}
</i18n>

<template>
  <div v-if="!cookie" id="cookie">
    <div class="container">
      <div class="row">
        <div class="col-12 col-10-m">
          <p>{{ this.$t("text") }} <nuxt-link :to="localePath('privacy') + '#cookies'">{{ this.$t("learn") }}</nuxt-link></p>
        </div>
        <div class="col-12 col-2-m">
          <button v-on:click="accept">{{ this.$t("button") }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cookie: this.$cookies.get("cookie")
    }
  },
  methods: {
    accept() {
      this.$cookies.set("cookie", true);
      this.cookie = true;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/theme.scss";

#cookie {
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: $background-light;

  * {
    text-align: center;
  }
  button {
    width: 100px;
    height: 30px;
  }
}
</style>