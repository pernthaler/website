<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p>Diese Website wurde mit <a href="https://vuejs.org/" target="_blank" ref="noopener">Vue.js</a> erstellt und ist <a href="https://github.com/Pernthaler/Website" target="_blank" ref="noopener">Open Source</a>.</p>
          <ul>
            <li><NuxtLink to="/imprint">Impressum</NuxtLink></li>
            <li><NuxtLink to="/privacy">Datenschutzerklärung</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  min-height: 50px;
}
p, a, ul {
  margin: 0;
  padding: 0;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    display: inline;
  }
}
</style>