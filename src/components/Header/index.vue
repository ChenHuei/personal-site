<template>
  <nav class="header">
    <div class="left">
      <div
        class="logo"
        @click="navigateHandler('about')">
      </div>
    </div>
    <div class="right">
      <ul>
        <li
          v-for="item in HEADER_ITEMS"
          :key="item.id"
          @click="navigateHandler(item.label)">
          {{item.label}}
        </li>
      </ul>
      <font-awesome-icon @click="openContainerHandler" icon="bars"/>
    </div>
    <div :class="containerClassHandler">
      <div
        class="left"
        @click="closeContainerHandler"></div>
      <div class="right">
        <div class="title">
          <h4>Zhen Huei</h4>
          <div
            class="cancel"
            @click="closeContainerHandler">
            X
          </div>
        </div>
        <ul>
          <li
            v-for="item in HEADER_ITEMS"
            :key="item.id"
            @click="navigateHandler(item.label)">
            {{item.label}}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { HEADER_ITEMS } from '@/constants'
export default {
  name: 'Header',
  data () {
    return {
      isOpen: false,
      location: {},
      nowLocation: 0,
      endLocation: 0,
      HEADER_ITEMS
    }
  },
  computed: {
    containerClassHandler () {
      return {
        container: true,
        open: this.isOpen
      }
    }
  },
  methods: {
    onScroll () {
      this.nowLocation = window.pageYOffset
    },
    openContainerHandler () {
      this.isOpen = true
    },
    closeContainerHandler () {
      this.isOpen = false
    },
    navigateHandler (label) {
      const link = label.toLowerCase()
      this.endLocation = this.location[link]
      this.animation()
    },
    animation () {
      const diff = Math.floor((this.endLocation - this.nowLocation) * 0.1)
      this.closeContainerHandler()
      if (diff === 0) {
        window.scroll(0, this.endLocation)
      } else {
        this.nowLocation += diff
        window.scroll(0, this.nowLocation)
        window.requestAnimationFrame(this.animation)
      }
    },
    setPosition () {
      const items = ['about', 'resume', 'works']
      items.forEach(item => {
        this.$set(this.location, item, document.querySelector(`#${item}`).offsetTop - 60)
      })
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.setPosition)
    this.setPosition()
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.setPosition)
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/import';
.header {
  @include size(100vw, 64px);
  @include flexCenter;
  @include fixed;
  justify-content: space-between;
  padding: 16px 10%;
  background-color: color(grey_light);
  z-index: 10;
  > .left {
    > .logo {
      @include size(64px);
      @include backgroundImage('../../assets/logo.png');
      cursor: pointer;
    }
  }
  > .right {
    @include flexCenter;
    > ul {
      @include flexCenter;
      margin: 0;
      padding: 0;
      > li {
        @include size(96px, 48px);
        @include flexCenter;
        position: relative;
        padding: 4px 16px;
        margin-right: 8px;
        color: color(white);
        font-weight: 500;
        opacity: .6;
        transition: .5s;
        list-style: none;
        cursor: pointer;
        &::after {
          content: '';
          @include size(0px);
          position: absolute;
          bottom: 2px;
          left: 50%;
          background-color: color(white);
          transition: .5s;
        }
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          opacity: 1;
          &::after {
            @include size(100%, 2px);
            left: 0;
          }
        }
      }
    }
    > svg {
      display: none;
      transform: scale(2);
      color: color(white);
      cursor: pointer;
      &:hover {
        opacity: .8;
      }
    }
  }
  > .container {
    @include size(100vw, 100vh);
    @include fixed;
    @include flexCenter;
    left: 150vw;
    transition: .5s;
    > .left {
      @include size(35%, 100%);
      background-color: color(black);
      opacity: .4;
      cursor: pointer;
    }
    > .right {
      @include size(65%, 100%);
      padding: 5%;
      background-color: color(white);
      > .title {
        position: relative;
        @include flexCenter;
        margin: 12px;
        > h4 {
          margin: 0;
          line-height: 24px;
          text-align: center;
        }
        > .cancel {
          position: absolute;
          right: -8px;
          top: 50%;
          padding: 4px 8px;
          border-radius: 50%;
          transform: translateY(-50%);
          transition: .5s;
          cursor: pointer;
          &:hover {
            font-weight: 700;
            color: color(white);
            background-color: color(red);
          }
        }
      }
      > ul {
        @include flexCenter;
        flex-direction: column;
        margin: 0;
        padding: 0;
        > li {
          @include size(100%, 40px);
          @include flexCenter;
          color: color(black);
          border-radius: 8px;
          list-style: none;
          cursor: pointer;
          &:hover {
            color: color(white);
            background-color: color(grey);
          }
        }
      }
    }
  }
}

@media screen and (max-width: 659px) {
  .header {
    > .right {
      > ul {
        display: none;
      }
      > svg {
        display: block;
      }
    }
    > .container {
      &.open {
        left: 0;
      }
    }
  }
}
</style>
