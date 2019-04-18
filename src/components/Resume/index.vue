<template>
  <section class="resume" id="resume">
    <Title :text="'RESUME'"/>
    <div class="container">
      <div
        class="step"
        v-for="step in RESUME_INFORMATION"
        :key="step.company">
        <div class="position">
          <div class="title">
            {{step.company}} / {{step.jobs}} ({{step.year}})
          </div>
          <ul class="items">
            <li
              class="item"
              v-for="item in step.list"
              :key="item.title">
              <div class="main">{{item.title}}</div>
              <div
                v-if="item.description"
                class="description">
                {{item.description}}
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
import { RESUME_INFORMATION } from '../../constants'
export default {
  name: 'Resume',
  data () {
    return {
      RESUME_INFORMATION
    }
  },
  components: {
    Title
  }
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
          padding: 0 28px;
          font-size: 20px;
          font-weight: 500;
          line-height: 32px;
          letter-spacing: .4px;
          text-align: right;
          &::after {
            content: '';
            position: absolute;
            right: -11px;
            top: 5px;
            @include size(20px);
            background-color: color(grey);
            border-radius: 50%;
          }
        }
        > .items {
          @include size(100%, auto);
          margin: 0;
          padding: 20px;
          text-align: right;
          > li {
            margin-bottom: 8px;
            font-size: 16px;
            line-height: 24px;
            list-style: none;
            > .description {
              font-size: 12px;
              color: color(grey);
              &::before {
                content: '('
              }
              &::after {
                content: ')'
              }
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
            &::after {
              left: -11px;
            }
          }
          > .items {
            text-align: left;
          }
        }
      }
      &:first-child {
        > .position {
          > .title {
            &::before {
              content: '';
              position: absolute;
              left: -2.5px;
              top: 0;
              @include size(5px);
              background-color: color(grey_dark);
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
            &::after {
              left: -11px;
            }
          }
          > .items {
            padding: 20px 28px 28px;
            text-align: left;
            > li {
              font-size: 14px;
              > .description {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
