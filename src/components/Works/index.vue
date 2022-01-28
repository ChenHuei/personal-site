<template>
  <section class="works" id="works">
    <Title :text="'LATEST WORKS'" />
    <div class="container">
      <div class="work" v-for="work in WORKS_INFORMATION" :key="work.name">
        <a :href="work.view" target="_blank">
          <div class="left" :style="workStyleHandler(work.logo)"></div>
        </a>
        <div class="right">
          <a :href="work.view" target="_blank">
            {{ work.name }}
          </a>
          <div class="description">{{ work.description }}</div>
          <div class="skill">
            <h4>專案內容：</h4>
            <ul>
              <li v-for="(skill, index) in work.skills" :key="skill">
                <div class="index">{{ index + 1 }}.</div>
                <div class="content">
                  {{ skill }}
                </div>
              </li>
            </ul>
            <template v-if="work.code">
              <a class="button" :href="work.code" target="_blank"> 原始碼 </a>
            </template>
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
    Title,
  },
  data() {
    return {
      WORKS_INFORMATION,
    }
  },
  methods: {
    workStyleHandler(url) {
      return {
        backgroundImage: `url(${url})`,
      }
    },
  },
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
      @include size(100%, 240px);
      @include flexCenter;
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
      > a {
        @include size(60%, 100%);
        > .left {
          @include size(100%);
          @include bgi;
        }
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}

.right {
  @include size(40%, 100%);
  padding: 0 24px;
  font-size: 14px;
  > a {
    font-size: 16px;
    font-weight: 700;
    color: color(black);
    text-decoration: none;
  }
  > .description {
    margin: 8px 0 16px;
    line-height: 24px;
    color: color(grey);
  }
  > .skill {
    > h4 {
      margin: 0 0 8px;
      font-size: 14px;
      font-weight: 700;
      color: color(black);
    }
    > ul {
      margin: 0;
      padding: 0;
      > li {
        display: flex;
        line-height: 24px;
        color: color(grey);
        list-style: none;
        > .index {
          @include size(16px, 24px);
          @include flexCenter;
        }
        > .content {
          @include size(calc(100% - 16px), auto);
        }
      }
    }
    > .button {
      @include size(50%, 32px);
      @include flexCenter;
      padding: 8px 16px;
      margin-top: 16px;
      color: color(grey);
      border: 1px solid color(black);
      border-radius: 8px;
      text-decoration: none;
      transition: 0.5s;
      cursor: pointer;
      &:hover {
        color: color(white);
        background-color: color(black);
      }
    }
  }
}
@media screen and (max-width: 659px) {
  .works {
    > .container {
      > .work {
        @include size(100%, auto);
        flex-direction: column;

        > a {
          @include size(100%, 200px);
        }
      }
    }
  }
  .right {
    @include flexCenter;
    @include size(100%, auto);
    flex-direction: column;
    margin-top: 20px;
    > .description {
      text-align: center;
    }
    > .skill {
      @include size(100%, auto);
      > h4 {
        text-align: center;
      }
      > ul {
        @include flexCenter;
        flex-direction: column;
        > li {
          @include size(100%, auto);
          @include flexCenter;
          > .content {
            @include size(auto);
            text-align: center;
          }
        }
      }
      > .button {
        @include size(100%, 32px);
        margin-top: 12px;
      }
    }
  }
}
</style>
