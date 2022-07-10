<template>
  <div class="menu-button">
    <input
      type="checkbox"
      id="navi-toggle"
      class="checkbox"
    />
    <label for="navi-toggle" class="button">
      <span class="icon">&nbsp;</span>
    </label>
    <div ref="menu" class="background" />
    <div class="content">
      <slot />
    </div>
  </div>

</template>

<script>
export default {
  name: "ToggleMenuButton",
}
</script>

<style scoped lang="scss">
.content {
  height: 100vh;
  position: fixed;
  top: 0;
  right: -60vw;
  z-index: 1500;
  opacity: 0;
  width: 0;
  transition: all 0.8s;
}

.checkbox:checked ~ .content {
  opacity: 1;
  width: 100%;
  right: 0;
}
.menu-button {
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.checkbox {
  display: none;
}

.button {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  position: absolute;
  z-index: 2000;
  text-align: center;
  cursor: pointer;
  border: 2px solid #fff;
  transition: all 0.3s;
  &:hover {
    border-color: rgba(255,255,255,.75);
  }
}
.button:hover {
  .icon,
  .icon::before,
  .icon::after {
    background-color: rgba(255,255,255,.75);
  }

}
.background {
  height: 90%;
  width: 90%;
  border-radius: 50%;
  background: #000;
  position: absolute;
  z-index: 1000;
  overflow: hidden;
  transform: scale(0);
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
}

.checkbox:checked ~ .background {
  transform: scale(80);
}

.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.icon,
.icon::before,
.icon::after {
  width: 50%;
  height: 2px;
  background-color: white;
  display: inline-block;
}

.icon::before,
.icon::after {
  content: "";
  position: absolute;
  left: 0;
  transition: all 0.2s;
  width: 100%;
}

.icon::before {
  top: -0.6rem;
}
.icon::after {
  top: 0.6rem;
}

.checkbox:checked + .button .icon {
  background-color: transparent;
}
.checkbox:checked + .button .icon::before {
  top: 0;
  transform: rotate(135deg);
}
.checkbox:checked + .button .icon::after {
  top: 0;
  transform: rotate(-135deg);
}
</style>
