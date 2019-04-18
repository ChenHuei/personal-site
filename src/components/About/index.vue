<template>
  <section class="about" id="about">
    <Title :text="'ABOUT ME'"/>
    <div class="container">
      <div class="left">
        <div class="cover"></div>
      </div>
      <div class="right">
        <div
          class="introduce"
          v-for="item in ABOUT_INFORMATION"
          :key="item.name">
          <div class="name">{{item.name}}</div>
          <div class="jobs">{{item.jobs}}</div>
          <div class="description">{{item.description}}</div>
          <div class="phone">
            <font-awesome-icon icon="mobile-alt" />
            {{item.phone}}</div>
          <a
            class="email"
            href="mailto:aaa830714@gmail.com"
            target="_blank">
            <font-awesome-icon icon="envelope" />
            {{item.email}}
          </a>
        </div>
        <div class="links">
          <a
            v-for="item in LINKS_ITEMS"
            :key="item.link"
            :href="item.link"
            target="_blank">
            <div class="button">
              {{item.name}}
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Title } from '../../components'
import { LINKS_ITEMS, ABOUT_INFORMATION } from '../../constants'
export default {
  name: 'About',
  components: {
    Title
  },
  data () {
    return {
      LINKS_ITEMS,
      ABOUT_INFORMATION
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/import';
.about {
  > .container {
    @include flexCenter;
    justify-content: space-between;
    margin-top: 64px;
    > .left {
      flex: 2;
      @include flexCenter;
      > .cover {
        @include size(300px);
        @include backgroundImage('../../assets/cover.jpg');
      }
    }
    > .right {
      flex: 3;
      margin-left: 24px;
      > .introduce {
        font-size: 14px;
        line-height: 24px;
        > .name {
          font-size: 24px;
          font-weight: 700;
        }
        > .jobs {
          margin: 8px 0;
          color: color(black_light);
          letter-spacing: 1px;
        }
        > .description {
          color: color(grey);
          text-align: justify;
          letter-spacing: .2px;
        }
        > .phone {
          margin: 16px 0 4px;
          > svg {
            margin: 0 3px;
          }
        }
        > .email {
          color: color(black_light);
          text-decoration: none;
        }
      }
      > .links {
        @include flexCenter;
        justify-content: flex-start;
        margin-top: 8px;
        > a {
          padding: 4px 8px;
          color: color(black);
          text-decoration: none;
          &:first-child {
            padding: 4px 0;
          }
          > .button {
            @include size(auto);
            @include flexCenter;
            padding: 12px 24px;
            margin-right: 24px;
            border-radius: 8px;
            border: 1px solid color(black);
            transition: .5s;
            cursor: pointer;
            &:hover {
              color: color(white);
              background-color: color(black);
            }
          }
        }
      }
    }
  }
}
</style>
