<template>
  <section class="works" id="works">
    <Title :text="'LATEST WORKS'"/>
    <div class="container">
      <div
        class="work"
        v-for="work in WORKS_INFORMATION"
        :key="work.name">
        <a
          :href="work.view"
          target="_blank">
          <div
            class="left"
            :style="workStyleHandler(work.logo)"></div>
        </a>
        <div class="right">
          <a
            :href="work.view"
            target="_blank">
            {{work.name}}
          </a>
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
            <div
              v-if="work.code"
              class="button">
              <a :href="work.code">
                原始碼
              </a>
            </div>
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
          opacity: .8;
        }
      }
      > .right {
        @include size(40%, 100%);
        padding: 0 16px;
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
          > .button {
            @include size(50%, 32px);
            @include flexCenter;
            padding: 8px 16px;
            border: 1px solid color(black);
            border-radius: 8px;
            transition: .5s;
            cursor: pointer;
            &:hover {
              background-color: color(black);
              > a {
                color: color(white);
              }
            }
            > a {
              color: color(grey);
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 659px) {
  .works {
    > .container {
      > .work {
        @include size(100%, 400px);
        flex-direction: column;
        > a {
          @include size(100%, 50%);
        }
        > .right {
          @include flexCenter;
          @include size(100%, auto);
          flex-direction: column;
          margin-top: 20px;
          > .skill {
            > h4 {
              text-align: center;
            }
            > ul {
              @include flexCenter;
              > li {
                margin: 0 8px 0 0;
                &::after {
                  content: ',';
                }
                &:last-child {
                  &::after {
                    content: '';
                  }
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
    }
}
}
</style>
