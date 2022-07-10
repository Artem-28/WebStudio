<template>
  <header class="app-header">
    Mobile header
    <ToggleMenuButton>
      <nav class="nav-links">
        <ul>
          <li
            v-for="link in links"
            :key="link.slug"
          >
            <LinkItem :link="link" class="link-item" />
          </li>
        </ul>
      </nav>
    </ToggleMenuButton>
  </header>
</template>

<script>
import ToggleMenuButton from "~/components/AppHeader/items/ToggleMenuButton";
import LinkItem from "~/components/AppHeader/items/LinkItem";
export default {
  name: "AppHeaderMobile",
  components: {LinkItem, ToggleMenuButton},
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
  position: fixed;
  padding: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-links {
  width: 100%;
  height: 100%;
  padding-top: 60px;
  padding-left: 30px;
}
ul > li {
  padding: 16px 0;
}
.link-item {
  font-size: 16px;
}

</style>
