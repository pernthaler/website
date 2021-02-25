<template>
  <nav>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <NuxtLink to="/"><span>Sebastian Pernhtaler</span></NuxtLink>
        </div>
        <div class="col-6">
          <ul>
            <li><NuxtLink to="/skills"><font-awesome-icon :icon="['fas', 'user']"/> Kenntnisse</NuxtLink></li>
            <li><a href="https://www.linkedin.com/in/pernthaler/" target="_blank" ref="noopener"><font-awesome-icon :icon="['fab', 'linkedin-in']"/> LinkedIn</a></li>
            <li><a href="mailto:sebastian@pernthaler.me"><font-awesome-icon :icon="['fas', 'envelope']"/> Kontakt</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  min-height: 50px;
}
ul, a {
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
  text-align: right;
  padding: 0;
  margin: 0;

  li {
    display: inline;
  }
}
</style>