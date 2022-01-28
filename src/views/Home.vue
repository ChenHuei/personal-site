<template>
  <div class="home">
    <Header />
    <About />
    <Resume />
    <Works />
    <Footer />
  </div>
</template>

<script>
import { Header, About, Resume, Works, Footer } from '@/components'
export default {
  name: 'Home',
  components: {
    Header,
    About,
    Resume,
    Works,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/import';
.home {
  @include size(100%, auto);
  margin-top: 64px;
  > section {
    padding: 80px 10%;
    &:nth-of-type(2n) {
      background-color: color(grey_dark);
    }
  }
}
</style>
