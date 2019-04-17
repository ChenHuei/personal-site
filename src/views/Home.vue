<template>
  <div class="home">
    <Header/>
    <About/>
    <Skill/>
    <Resume/>
    <Works/>
  </div>
</template>

<script>
import { Header, About, Resume, Skill, Works } from '@/components'
export default {
  name: 'Home',
  components: {
    Header,
    About,
    Resume,
    Skill,
    Works
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/import';
.home {
  > section {
    padding: 80px 10%;
    &:nth-of-type(2n) {
      background-color: color(grey_dark);
    }
  }
}
</style>
