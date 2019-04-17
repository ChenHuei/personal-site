<template>
  <div class="footer">
    <div class="container">
      <span>Contact Me</span>
      <div class="items">
        <div
          class="item"
          v-for="item in FOOTER_ITEMS"
          :key="item.url">
          <a :href="item.url" target="_blank">
          </a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FOOTER_ITEMS } from '../../constants'
export default {
  name: 'Footer',
  data () {
    return {
      FOOTER_ITEMS
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/import';
.footer {
  @include size(100%, 200px);
  padding: 40px 10%;
  // background-color: color(black_dark);
  > .container {
    @include size(100%);
    @include flexCenter;
    color: color(white);
    font-size: 20px;
    font-weight: 500;
    > .items {
      @include flexCenter;
      > .item {
        @include size(24px);
        > a {
          @include size(100%);
        }
      }
    }
  }
}
</style>
