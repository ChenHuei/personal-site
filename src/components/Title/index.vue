<template>
  <div class="title">
    <h4>{{text}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/import';
.title {
  @include size(100%, 46px);
  @include flexCenter;
  > h4 {
    margin: 0;
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 2px;
  }
}
</style>
