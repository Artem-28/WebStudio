<template>
  <div class="app">
    {{getScreen}}
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    getScreen() {
      return this.$screen?.type
    }
  },
}
</script>
<style scoped lang="scss">
@import "assets/sass/style";
.app  {
  height: 110vh;
  background-color: var(--primary);
}

@media (max-width: $sm) {
  .app {
    background-color: black;
  }
}
@media (max-width: $xs) {
  .app {
    background-color: red;
  }
}

</style>
