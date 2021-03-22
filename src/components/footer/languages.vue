<template>
  <select aria-label="Languages" v-model="selected" v-on:change="$router.push(switchLocalePath(selected))">
    <option v-for="locale of $i18n.locales" :selected="selected === locale.code" :value="locale.code">{{ locale.name }}</option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      selected: this.$i18n.localeProperties.code
    };
  }
}
</script>

<style lang="scss" scoped/>