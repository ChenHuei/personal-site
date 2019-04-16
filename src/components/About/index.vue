<template>
  <section class="about">
    <Title :text="'ABOUT ME'"/>
    <div class="container">
      <div class="left">
        <div class="cover"></div>
      </div>
      <div class="right">
        <div class="introduce">
          Hello！我是振輝，今年 25 歲！前年從淡江大學資管系畢業後，因興趣和理念相近先至 IOH 擔任活動企劃專員將近一年，
          負責統整公司的線下活動。並於工作過程中發現自己對網頁設計持有一些興趣，時常利用下班後或假日的時間自學網頁相關資訊，
          包括 HTML、CSS、Javascript、PHP 和 Ruby on Rails 等。
          以下將更詳細說明我過往的學經歷，非常感謝您抽空觀看我的個人網站，請多多指教，謝謝！
        </div>
        <div class="buttons">
          <Button text="Download CV"/>
          <Button text="Hire Me"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '../Title'
import Button from '../Button'
export default {
  name: 'About',
  components: {
    Title,
    Button
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
        color: color(grey);
        font-size: 14px;
        line-height: 24px;
        text-align: justify;
        letter-spacing: .2px;
      }
      > .buttons {
        @include flexCenter;
        justify-content: flex-start;
        margin-top: 24px;
      }
    }
  }
}
</style>
