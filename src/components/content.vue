<template>
  <div id="content">
    <main class="container">
      <Nuxt/>
    </main>
    <Cookies/>
  </div>
</template>

<style lang="less" scoped>
#content {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: @background-dark;
}
main {
  flex: 1;
}
</style>