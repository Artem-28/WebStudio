import Vue from "vue";

export default (context, inject) => {
  const screen = {
    type: getBreakpoint(window.innerWidth)
  }
  window.addEventListener('resize', () => {
    screen.type = getBreakpoint(window.innerWidth)
  })
  Vue.prototype.$screen = Vue.observable(screen)

}
function getBreakpoint(width) {
  const breakpoints = {
    xs: 600,
    sm: 1024,
    md: 1440,
    lg: 1920,
    xl: 1920
  }
  if (width < breakpoints.xs) {
    return 'xs'
  }
  if (width < breakpoints.sm) {
    return 'sm'
  }
  if (width < breakpoints.md) {
    return 'md'
  }
  if (width < breakpoints.lg) {
    return 'lg'
  }
  return 'xl'
}
