<template>
  <section class="resume" id="resume">
    <Title :text="'RESUME'" />
    <div class="container">
      <div class="step" v-for="step in RESUME_INFORMATION" :key="step.company">
        <div class="position">
          <div class="title">
            <div class="anchor"><Ripple /></div>
            <span>{{ step.company }} / {{ step.jobs }} ({{ step.year }})</span>
          </div>
          <ul class="items">
            <li class="item" v-for="item in step.list" :key="item.title">
              <div class="main">
                <template v-if="item.link">
                  <a :href="item.link" target="_blank">
                    {{ item.title }}
                  </a>
                </template>
                <template v-else>
                  {{ item.title }}
                </template>
              </div>
              <div v-if="item.description" class="description">
                <div v-for="element in item.description" :key="element">{{ element }}</div>
                {{ element }}
              </div>
              <div v-if="item.skill" class="skill">
                {{ item.skill }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '../Title'
import Ripple from './components/Ripple'
import { RESUME_INFORMATION } from '../../constants'
export default {
  name: 'Resume',
  // eslint-disable-next-line
  data() {
    return {
      RESUME_INFORMATION,
    }
  },
  components: {
    Title,
    Ripple,
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/import';
.resume {
  > .container {
    margin-top: 64px;
    > .step {
      @include flexCenter;
      justify-content: flex-start;
      > .position {
        @include flexCenter;
        @include size(calc(50% - 1px), auto);
        flex-direction: column;
        align-items: flex-end;
        border-right: 2px solid color(grey);
        box-sizing: content-box;
        > .title {
          position: relative;
          @include size(100%, auto);
          display: flex;
          justify-content: flex-end;
          padding: 0 28px;
          font-size: 20px;
          font-weight: 500;
          line-height: 32px;
          letter-spacing: 0.4px;
          text-align: right;
          > .anchor {
            position: absolute;
            right: -1px;
            left: unset;
            top: 16px;
          }
        }
        > .items {
          @include size(100%, auto);
          margin: 0;
          padding: 28px;
          text-align: right;
          > .item {
            margin-bottom: 16px;
            font-size: 16px;
            line-height: 24px;
            list-style: none;
            > .main {
              position: relative;
              @include flexCenter;
              justify-content: flex-end;
              > a {
                position: relative;
                right: -8px;
                color: color(black);
                text-decoration: none;
                transition: 0.5s;
                padding: 0 8px;
                &:hover {
                  color: color(white);
                  background-color: color(black);
                }
              }
              > .skill {
                margin-left: 4px;
              }
            }
            > .description,
            > .remark,
            > .skill {
              font-size: 12px;
            }
            > .remark,
            > .skill {
              color: color(grey);
            }
            &:last-child {
              margin: 0;
            }
          }
        }
      }
      &:nth-child(2n + 1) {
        justify-content: flex-end;
        > .position {
          align-items: flex-start;
          border-right: none;
          border-left: 2px solid color(grey);
          > .title {
            text-align: left;
            justify-content: flex-start;
            > .anchor {
              left: -1px;
              right: unset;
            }
          }
          > .items {
            text-align: left;
            > li {
              > .main {
                justify-content: flex-start;
                > a {
                  right: 0;
                  left: -8px;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 659px) {
  .resume {
    > .container {
      > .step {
        > .position {
          @include size(100%, auto);
          border-left: 2px solid color(grey);
          border-right: none;
          > .title {
            font-size: 16px;
            text-align: left;
            justify-content: flex-start;
            > .anchor {
              left: -1px;
              right: unset;
            }
          }
          > .items {
            padding: 20px 28px 28px;
            text-align: left;
            > .item {
              > .main {
                justify-content: flex-start;
                > a {
                  left: -8px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
