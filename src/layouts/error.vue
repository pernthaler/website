<template>
  <div class="row">
    <div class="col-12">
      <p v-if="error.statusCode === 404">404</p>
      <p v-else>An error occurred</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: [
    "error"
  ]
}
</script>