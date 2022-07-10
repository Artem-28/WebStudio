<template>
  <header
    :class="['app-header', { 'fix-header': isFixHeader }]">
    <div class="left-block">APP HEADER</div>
    <nav class="right-block">
      <ul class="nav-links">
        <li v-for="link in links" :key="link.slug">
          <LinkItem :link="link" :dark="isFixHeader" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import LinkItem from "~/components/AppHeader/items/LinkItem";
export default {
  name: "AppHeaderDefault",
  components: {LinkItem},
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      scroll: 0
    }
  },
  computed: {
    isFixHeader() {
      return this.scroll > 10
    }
  },
  methods: {
    scrollHandler() {
      this.scroll = window.pageYOffset
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler)
    this.scrollHandler()
  },
}
</script>

<style scoped lang="scss">
.app-header {
  position: fixed;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  left: 0;
  top: 0;
  right: 0;
  height: 70px;
  margin-top: 30px;
  padding: 0 30px;
  transition: all 0.3s;
}
.nav-links {
  display: flex;
}
.fix-header {
  background-color: #fff;
  margin-top: 0;
  box-shadow: 0 7px 15px -7px rgb(0 0 0 / 4%);
}

</style>
