<template>
  <section class="works">
    <Title :text="'LATEST WORKS'"/>
    <div class="container">
      <div
        class="work"
        v-for="work in WORKS_INFORMATION"
        :key="work.name">
        <div
          class="left"
          :style="workStyleHandler(work.logo)"></div>
        <div class="right">
          <div class="name">{{work.name}}</div>
          <div class="description">{{work.description}}</div>
          <div class="skill">
            <h4>相關技術：</h4>
            <ul>
              <li
                v-for="skill in work.skills"
                :key="skill">
                {{skill}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '../Title'
import { WORKS_INFORMATION } from '../../constants'
export default {
  name: 'About',
  components: {
    Title
  },
  data () {
    return {
      WORKS_INFORMATION
    }
  },
  methods: {
    workStyleHandler (url) {
      return {
        backgroundImage: `url(${url})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/import';
.works {
  > .container {
    @include flexCenter;
    flex-direction: column;
    margin-top: 64px;
    > .work {
      @include size(100%, 200px);
      @include flexCenter;
      margin-bottom: 40px;;
      cursor: pointer;
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        opacity: .8;
      }
      > .left {
        @include size(60%, 100%);
        @include bgi;
      }
      > .right {
        @include size(40%, 100%);
        padding: 0 16px;
        font-size: 14px;
        > .name {
          font-size: 16px;
          font-weight: 700;
        }
        > .description {
          margin: 8px 0 16px;
          color: color(grey);
        }
        > .skill {
          > h4 {
            margin: 0 0 8px;
            font-weight: 400;
          }
          > ul {
            margin: 0;
            padding: 0;
            > li {
              list-style: none;
              margin-bottom: 8px;
            }
          }
        }
      }
    }
  }
}
</style>
