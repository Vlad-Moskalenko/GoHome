<script setup>
defineProps({
  type: {
    type: String,
    default: 'button',
  },
  outlined: {
    type: Boolean,
    default: false,
  }
})

</script>

<template>
  <button @click="$emit('increment')" :type="type" :class="{btn: true, 'btn--outlined': outlined}"><slot/></button>
</template>

<style scoped>
  .btn {
    padding: 11px 34px;

    font-family: 'Montserrat Medium';
    font-size: 18px;
    line-height: 1.17px;

    color: #FFFFFF;
    background: #FF662D;

    border: none;
  }

  .btn--outlined {
    color: #000000;
    background-color: transparent;
    border: 1px solid #FF662D;
  }
</style>