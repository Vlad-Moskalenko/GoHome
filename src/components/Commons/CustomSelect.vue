<script setup>
defineProps({
  options: {
    type: Array,
    default: () => []
  },
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>

<template>
  <select name="select" id="select" :value="modelValue" @input="updateValue" class="custom-select">
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      >{{ option }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.custom-select {
  height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  padding: 8px 15px;
  cursor: pointer;
  display: inline-block;
}
</style>