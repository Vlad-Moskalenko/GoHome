<script setup lang="ts">
defineProps({
  width: {
    type: [Number, String],
    default: 50
  },
  height: {
    type: [Number, String],
    default: 50
  },
  color: {
    type: String,
    default: '#fff'
  }
})
</script>

<template>
  <span class="circle-loader">
    <svg class="preloader-icon" viewBox="0 0 100 100" :width="width" :height="height">
      <circle :stroke="color" cx="50" cy="50" r="40" stroke-width="5" fill="none"></circle>
    </svg>
  </span>
</template>

<style lang="scss" scoped>
.preloader-icon {
  stroke-dasharray: 0 250;
  animation: preloader 4s infinite;
}

@keyframes preloader {
  0% {
    stroke-dasharray: 0 250;
    transform: rotate(0);
  }

  50% {
    stroke-dasharray: 255 250;
    transform: rotate(650deg);
  }

  100% {
    stroke-dasharray: 0 250;
    transform: rotate(0);
  }
}
</style>
