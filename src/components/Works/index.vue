<template>
  <section class="works">
    <Title :text="'LATEST WORKS'"/>
    <div class="container">
    </div>
  </section>
</template>

<script>
import Title from '../Title'
export default {
  name: 'About',
  components: {
    Title
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/import';
.works {
  > .container {
    @include flexCenter;
    justify-content: space-between;
    margin-top: 64px;
  }
}
</style>
