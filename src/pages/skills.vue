<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h1>Kenntnisse</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-4-m col-12" v-for="category of categories">
        <h2>{{category.name}}</h2>
        <ul>
          <li v-for="language of category.languages">{{language}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
const categories = [
  {name: "Programmiersprachen", languages: [
      "Java",
      "Rust",
      "C++"
    ]},
  {name: "Skriptsprachen", languages: [
      "Bash",
      "Batch",
      "JavaScript",
      "TypeScript"
    ]},
  {name: "Andere Sprachen", languages: [
      "Markdown",
      "CSS",
      "HTML",
      "SASS",
      "BBCode",
      "SQL",
      "JSON",
      "XML"
    ]}
];

categories.forEach(category => category.languages.sort());

export default {
  data() {
    return {
      categories
    }
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