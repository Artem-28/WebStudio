<template>
  <header class="app-header">Mobile header</header>
</template>

<script>
export default {
  name: "AppHeaderMobile",
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.app-header {
  height: 60px;
}

</style>
