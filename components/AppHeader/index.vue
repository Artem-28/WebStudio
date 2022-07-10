<template>
  <component
    :is="isComponent"
    :links="links"
  />
</template>

<script>
export default {
  name: "AppHeader",
  components: {
    mobile: () => import('./AppHeaderMobile'),
    desktop: () => import('./AppHeaderDefault')
  },
  data() {
    return {
      links: [
        {
          label: 'Главная',
          url: '/',
          slug: 'home'
        },
        {
          label: 'Наши услуги',
          url: '/service',
          slug: 'services'
        },
        {
          label: 'О нас',
          url: '/about',
          slug: 'about'
        },

      ]
    }
  },
  computed: {
    isComponent() {
      switch (this.$screen?.type) {
        case 'xs':
          return 'mobile';
        default:
          return 'desktop'
      }
    }
  },
}
</script>

<style scoped lang="scss">


</style>
