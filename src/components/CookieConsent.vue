<i18n>
{
  "en": {
    "text": "This website uses cookies to ensure you get the best experience on our website. |Learn more",
    "button": "Got it"
  },
  "de": {
    "text": "Diese Webseite verwendet Cookies, um sicherzustellen, dass Sie die bestmögliche Erfahrung auf unserer Webseite machen. |Mehr erfahren",
    "button": "Verstanden"
  }
}
</i18n>

<template>
  <div v-if="!cookie" id="cookie">
    <div class="container">
      <div class="row">
        <div class="col-12 col-10-m">
          <p>{{ $t("text").split("|")[0] }} <nuxt-link :to="localePath('privacy') + '#cookies'">{{ $t("text").split("|")[1] }}</nuxt-link></p>
        </div>
        <div class="col-12 col-2-m">
          <button @click="accept">{{ $t("button") }}</button>
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
    };
  },
  methods: {
    accept() {
      const seconds = 6 * 30 * 24 * 60 * 60;
      this.$cookies.set("cookie", true, { expires: new Date(new Date().getTime() + seconds * 1000), maxAge: seconds });
      this.$anime({
        targets: "#cookie",
        easing: "linear",
        duration: 250,
        height: 0,
        complete: () => {
          this.cookie = true;
        }
      });
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
    min-width: 100px;
    height: 30px;
  }
}
</style>