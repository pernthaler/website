<template>
    <div>
        <main>
            <Nuxt/>
        </main>
        <Cookies/>
    </div>
</template>

<style lang="less" scoped>
div {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: @background-light;
}
main {
    flex: 1;
}
</style>