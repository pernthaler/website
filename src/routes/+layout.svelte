<script lang="ts">
    import "./styles.scss";
</script>

<main>
    <slot/>
</main>

<style lang="scss">
    main {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>