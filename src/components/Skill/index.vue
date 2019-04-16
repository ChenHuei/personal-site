<template>
  <section class="skill">
    <Title :text="'Skill'"/>
    <div class="container">
      <div
        class="card"
        v-for="card in SKILL_INFORMATION"
        :key="card.name">
        <div class="title">
          <div
            class="left"
            :style="logoStyleHandler(card.logo)"></div>
          <div class="right">
            {{card.name}}
          </div>
        </div>
        <div class="list">
          <div
            class="item"
            v-for="(item, index) in card.list"
            :key="item.name">
            <div class="main">
              <span>{{index + 1}}.</span>
              {{item.name}}
            </div>
            <div class="description">{{item.description}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '../Title'
import { SKILL_INFORMATION } from '../../constants'
export default {
  name: 'Skill',
  data () {
    return {
      SKILL_INFORMATION
    }
  },
  components: {
    Title
  },
  methods: {
    logoStyleHandler (url) {
      return {
        backgroundImage: `url(${url})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/import';
.skill {
  > .container {
    @include flexCenter;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 64px;
    > .card {
      flex: 1;
      min-height: 200px;
      padding: 0 12px;
      font-size: 14px;
      color: color(black);
      > .title {
        @include flexCenter;
        justify-content: flex-start;
        margin-bottom: 20px;
        > .left {
          @include size(40px);
          @include bgi;
        }
        > .right {
          margin-left: 8px;
          font-size: 16px;
          font-weight: 500;
        }
      }
      > .list {
        > .item {
          margin-bottom: 8px;
          > .main {
            margin-bottom: 4px;
          }
          > .description {
            color: color(grey);
            text-align: justify;
            line-height: 24px;
          }
        }
      }
    }
  }
}
</style>
