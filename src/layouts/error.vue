<template>
  <p v-if="error.statusCode === 404">404</p>
</template>

<script>
export default {
  props: ["error"],
  layout: "error"
}
</script>