<template>
  <div class="button">
    <span>{{text}}</span>
  </div>
</template>

<script>
export default {
  name: 'Button',
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
.button {
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
</style>
