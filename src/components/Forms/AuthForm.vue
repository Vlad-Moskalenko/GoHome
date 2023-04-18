<script setup>
import { provide, ref } from 'vue'

const inputs = ref([])

const registerInput = (input) => {
  inputs.value.push(input)
}

const unRegisterInput = (input) => {
  inputs.value = inputs.value.filter((item) => input !== item)
}

provide('form', {
  registerInput,
  unRegisterInput
})
</script>

<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<style lang="scss" scoped></style>
