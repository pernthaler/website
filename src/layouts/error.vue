<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <p v-if="error.statusCode === 404">The server can not find the requested resource.</p>
    <p v-else>An error occurred.</p>
  </div>
</template>

<script>
export default {
  props: [
    "error"
  ],
  created() {
    this.$store.commit("SET_TITLE", this.error.statusCode);
  }
}
</script>