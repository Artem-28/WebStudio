<template>
  <nuxt-link
    :to="link.url"
    :class="['nav-link', { dark }]"
  >
    {{link.label}}
  </nuxt-link>
</template>

<script>
export default {
  name: "LinkItem",
  props: {
    link: {
      type: Object,
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.nav-link {
  padding: 0 16px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  transition: all 0.3s;
  &:hover {
    color: rgba(255,255,255,.75);
  }
}
.nav-link.dark {
  color: #000;
  &:hover {
    color: var(--primary);
  }
}

</style>
