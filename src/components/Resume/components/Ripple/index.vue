<template>
  <div class="ripple">
    <div
      v-for="(circle, index) in circles"
      :key="index"
      class="circle"
      :style="getAnimationDelay(index)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      circles: 3, // 設定圈圈的數量
    }
  },
  methods: {
    getAnimationDelay(index) {
      return {
        animationDelay: `${index * 0.8}s`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.ripple {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #d8d8d8;
  border-radius: 10%;
}

.circle {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #666;
  border-radius: 50%;
  animation: ripple 3s linear infinite;
}

@keyframes ripple {
  from {
    opacity: 1;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(4);
  }
}
</style>
