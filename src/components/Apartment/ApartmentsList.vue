<script setup>
import ApartmentsItem from './ApartmentsItem.vue';

defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

</script>

<template>
  <slot name="title"></slot>
  <ul class="apartments-list">
    <ApartmentsItem v-for="apartment in items" :key="apartment.id" :apartmentData = "apartment"/>
  </ul>
</template>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
</style>