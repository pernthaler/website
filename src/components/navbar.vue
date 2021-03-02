<i18n>
{
  "en": {
    "skills": "Skills",
    "contact": "Contact"
  },
  "de": {
    "skills": "Kenntnisse",
    "contact": "Kontakt"
  }
}
</i18n>

<template>
  <nav>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <nuxt-link :to="localePath('/')"><span>Sebastian Pernhtaler</span></nuxt-link>
        </div>
        <div class="col-6">
          <ul>
            <li><nuxt-link :to="localePath('skills')"><font-awesome-icon :icon="['fas', 'user']"/> {{ $t("skills") }}</nuxt-link></li>
            <li><a href="https://www.linkedin.com/in/pernthaler/" target="_blank" rel="noopener"><font-awesome-icon :icon="['fab', 'linkedin-in']"/> LinkedIn</a></li>
            <li><a href="mailto:Sebastian Pernthaler <sebastian@pernthaler.me>"><font-awesome-icon :icon="['fas', 'envelope']"/> {{ $t("contact") }}</a></li>
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