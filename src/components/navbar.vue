<i18n locale="en">
{
  "home": "Home",
  "about": "About Me",
  "source": "Source Code"
}
</i18n>

<i18n locale="de">
{
  "home": "Startseite",
  "about": "Über Mich",
  "source": "Quellcode"
}
</i18n>

<template>
  <div id="navbar">
    <div id="logo">
      <nuxt-link :to="localePath('/')"><img src="~assets/img/logo.svg" alt="Logo" width="40px" height="40px"/></nuxt-link>
    </div>
    <nav>
      <ul>
        <li><nuxt-link :to="localePath('/')"><fa-icon :icon="['fas', 'angle-right']"/> {{ $t("home") }}</nuxt-link></li>
        <li><nuxt-link :to="localePath('about')"><fa-icon :icon="['fas', 'angle-right']"/> {{ $t("about") }}</nuxt-link></li>
        <li><a href="https://github.com/Pernthaler/Website" target="_blank" rel="noopener"><fa-icon :icon="['fas', 'external-link-alt']"/> {{ $t("source") }}</a></li>
        <li><a href="https://www.linkedin.com/in/pernthaler/" target="_blank" rel="noopener"><fa-icon :icon="['fas', 'external-link-alt']"/> LinkedIn</a></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="less" scoped>
#navbar {
  z-index: 1;
  background-color: @background-light;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  a.nuxt-link-exact-active {
    color: @primary-dark;
  }
  p {
    margin: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      float: left;
      margin: 10px;
    }
  }
  nav, footer {
    padding: 10px;
  }
  #logo {
    flex: 1;
    margin: 10px;
  }
}
</style>