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
            <font-awesome-icon :icon="iconHandler(item)" />
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
  },
  methods: {
    iconHandler (item) {
      return item.isBrand ? { prefix: 'fab', iconName: item.tag } : item.tag
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/import';
.footer {
  @include size(100%, 200px);
  padding: 40px 10%;
  background-color: color(black_dark);
  > .container {
    @include size(100%);
    @include flexCenter;
    flex-direction: column;
    color: color(white);
    font-size: 20px;
    font-weight: 500;
    > .items {
      @include flexCenter;
      margin-top: 16px;
      > .item {
        @include size(40px, 32px);
        @include flexCenter;
        > a {
          @include size(100%);
          @include flexCenter;
          padding: 4px 8px;
          text-decoration: none;
          color: color(white);
          &:hover {
            opacity: .8;
          }
          > svg {
            @include size(100%);
          }
        }
      }
    }
  }
}
</style>
