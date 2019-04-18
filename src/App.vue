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
  @include size(98.5vw, 100vh);
  font-family: $font-family;
  color: color(black);
}
@media screen and (max-width: 800px) {
  #app {
    @include size(100vw, 100vh);
  }
}
</style>
