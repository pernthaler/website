<i18n>
{
  "en": {
    "title": "About Me",

    "skills": "Skills",
    "programming": "Programming languages",
    "scripting": "Scripting languages",
    "other": "Other languages"
  },
  "de": {
    "title": "Über Mich",

    "skills": "Kenntnisse",
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
        <div class="LI-profile-badge" data-version="v1" data-size="large" :data-locale="$i18n.localeProperties.iso.replace('-', '_')" data-type="horizontal" data-theme="light" data-vanity="pernthaler">
          <a class="LI-simple-link" href="https://www.linkedin.com/in/pernthaler" target="_blank" rel="noopener">Sebastian Pernthaler</a>
        </div>
        <h2>{{ $t("skills") }}</h2>
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
      en: encodeURI("/about-me"),
      de: encodeURI("/über-mich")
    }
  },
  head() {
    return {
      script: [
        {
          hid: "linkedin",
          type: "text/javascript",
          src: "https://platform.linkedin.com/badges/js/profile.js",
          async: true,
          defer: true
        }
      ]
    };
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
.LI-profile-badge {
  display: flex;
  justify-content: center;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>