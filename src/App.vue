<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './styles/import';
#app {
  @include size(calc(100vw -15px), 100vh);
  font-family: $font-family;
  color: color(black);
}
@media screen and (max-width: 659px) {
  #app {
    @include size(100vw, 100vh);
  }
}
</style>
