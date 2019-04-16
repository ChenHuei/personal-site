<template>
  <section class="resume">
    <Title :text="'RESUME'"/>
  </section>
</template>

<script>
import Title from '../Title'
export default {
  name: 'Resume',
  components: {
    Title
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/import';

</style>
