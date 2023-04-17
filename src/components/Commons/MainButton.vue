<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  },
  outlined: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    @click="$emit('increment')"
    :type="type"
    :class="{ btn: true, 'btn--outlined': outlined }"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  padding: 11px 34px;

  font-family: 'Montserrat Medium';
  font-size: 18px;
  line-height: 1.17px;

  color: #ffffff;
  background: #ff662d;

  border: none;
}

.btn--outlined {
  color: #000000;
  background-color: transparent;
  border: 1px solid #ff662d;
}

.btn:disabled {
  opacity: 0.3;
}
</style>
