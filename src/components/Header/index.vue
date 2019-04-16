<template>
  <div class="header">
    <div class="left">
      <div class="logo"></div>
    </div>
    <div class="right">
      <ul>
        <li
          v-for="item in HEADER_ITEMS"
          :key="item.id">
          {{item.label}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { HEADER_ITEMS } from '@/constants'
export default {
  name: 'Header',
  data () {
    return {
      HEADER_ITEMS
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/import';
.header {
  @include size(100vw, 64px);
  @include flexCenter;
  justify-content: space-between;
  padding: 16px 10%;
  background-color: color(grey_light);
  > .left {
    > .logo {
      @include size(32px);
      @include backgroundImage('../../assets/logo.png');
      cursor: pointer;
    }
  }
  > .right {
    > ul {
      @include flexCenter;
      margin: 0;
      padding: 0;
      > li {
        padding: 16px 24px;
        color: color(white);
        font-weight: 500;
        opacity: .6;
        transition: .5s;
        list-style: none;
        cursor: pointer;
        &:last-child {
          padding: 16px 0 16px 16px;
        }
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
