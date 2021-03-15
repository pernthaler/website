<i18n>
{
  "en": {
    "title": "Skills",
    "programming": "Programming languages",
    "scripting": "Scripting languages",
    "other": "Other languages"
  },
  "de": {
    "title": "Kenntnisse",
    "programming": "Programmiersprachen",
    "scripting": "Skriptsprachen",
    "other": "Andere Sprachen"
  }
}
</i18n>

<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h1>{{ $t("title") }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-4-m col-12" v-for="category of categories">
        <h2>{{ category.name }}</h2>
        <ul>
          <li v-for="language of category.languages">{{ language }}</li>
        </ul>
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
      en: encodeURI("/skills"),
      de: encodeURI("/kenntnisse")
    }
  },
  data() {
    const categories = [
      { name: this.$t("programming"), languages: [
          "Java",
          "Rust",
          "C++"
        ]},
      { name: this.$t("scripting"), languages: [
          "Bash",
          "Batch",
          "JavaScript",
          "TypeScript",
          "PHP"
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
          "YAML"
        ]}
    ];
    categories.forEach(category => category.languages.sort());
    return {
      categories
    };
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>