<i18n locale="en">
{
  "title": "About Me",

  "skills": "Skills",
  "programming": "Programming languages",
  "scripting": "Scripting languages",
  "other": "Other languages"
}
</i18n>

<i18n locale="de">
{
  "title": "Über Mich",

  "skills": "Kenntnisse",
  "programming": "Programmiersprachen",
  "scripting": "Skriptsprachen",
  "other": "Andere Sprachen"
}
</i18n>

<template>
  <div>
    <h1><fa-icon :icon="['fas', 'user']"/> {{ $t("title") }}</h1>
    <h2>{{ $t("skills") }}</h2>
    <div v-for="category of categories" v-bind:key="category">
      <h3>{{ category.name }}</h3>
      <ul>
        <li v-for="language of category.languages" v-bind:key="language">{{ language }}</li>
      </ul>
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
  data() {
    const categories = [
      { name: this.$t("programming"), languages: [
          "Java",
          "C",
          "C++",
          "Go",
          "Ruby",
          "TypeScript",
          "CoffeeScript",
          "Rust",
          "Kotlin"
        ]},
      { name: this.$t("scripting"), languages: [
          "Bash",
          "Batch",
          "JavaScript",
          "PHP",
          "Groovy"
        ]},
      { name: this.$t("other"), languages: [
          "Markdown",
          "CSS",
          "HTML",
          "SASS",
          "BBCode",
          "SQL",
          "JSON",
          "XML",
          "LaTeX",
          "Regex",
          "YAML",
          "Haml",
          "FreeMarker",
          "Sinatra",
          "JSX"
        ]}
    ];
    categories.forEach(category => category.languages.sort());
    return {
      categories
    };
  }
}
</script>

<style lang="less" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>