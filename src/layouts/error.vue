<template>
  <div class="row">
    <div class="col-6">
      <p v-if="error.statusCode === 404">404</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error"
}
</script>