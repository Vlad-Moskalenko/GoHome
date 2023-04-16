<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  console.log(route.params.id)
})
</script>

<template>
  <h2>Apartment Page</h2>
</template>

<style lang="scss" scoped></style>
