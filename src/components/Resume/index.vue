<template>
  <section class="resume">
    <Title :text="'RESUME'"/>
    <div class="container">
      <div
        v-for="(type, index) in RESUME_INFORMATION"
        :key="type.title"
        :class="typeClassHandler(index)">
        <div
          class="item"
          v-for="item in type.list"
          :key="item.en">
          <div class="year">
            {{item.yearStart}}
            <span>-</span>
            {{item.yearEnd}}
          </div>
          <div class="en">{{item.en}}</div>
          <div class="zn">{{item.zn}}</div>
          <div class="description">{{item.description}}</div>
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
  },
  methods: {
    typeClassHandler (index) {
      return {
        type: true,
        education: index === 0,
        experience: index === 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/import';
.resume {
  > .container {
    @include flexCenter;
    flex-direction: column;
    margin-top: 64px;
    > .type {
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin: 40px 0 20px 0;
      padding-bottom: 20px;
      &:first-child {
        border-bottom: 1px solid color(black);
      }
      &.education {
        &::before {
          content: 'Eduction：';
        }
      }
      &.experience {
        &::before {
          content: 'Experience：'
        }
      }
      &.education, &.experience {
        &::before {
          position: absolute;
          left: 12px;
          top: -40px;
          font-size: 20px;
          color: color(black_light);
        }
      }
      > .item {
        @include size(50%, auto);
        padding: 0 12px;
        font-size: 14px;
        color: color(black);
        > .year {
          @include size(120px, 28px);
          @include flexCenter;
          padding: 4px 20px;
          margin-bottom: 16px;
          color: color(white);
          background: color(black_dark);
          > span {
            margin: 0 4px;
          }
        }
        > .en {
          font-size: 16px;
        }
        > .zn {
          margin: 8px 0 12px 0;
          font-weight: 700;
        }
        > .description {
          text-align: justify;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
