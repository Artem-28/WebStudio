<template>
  <div class="app-wrapper">
    <AppHeader/>
    <main class="page-wrapper">
      <Nuxt  />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader";
import AppFooter from "~/components/AppFooter";
export default {
  name: "default",
  components: {AppFooter, AppHeader}
}
</script>

<style scoped lang="scss">
.app-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}
.page-wrapper {
  height: 100%;
  width: 100%;
  background: blue;
}

</style>
