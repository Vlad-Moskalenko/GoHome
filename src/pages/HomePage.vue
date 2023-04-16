<script setup>
import { ref } from 'vue'
import { computed } from 'vue'

import ApartmentsList from '../components/Apartment/ApartmentsList.vue'
import ApartmentFilterForm from '../components/Apartment/ApartmentFilterForm.vue'

import apartments from '../components/Apartment/apartment'

const filter = ({ city, price }) => {
  ;(filters.value.city = city), (filters.value.price = price)
}

const filteredApartments = computed(() => {
  return filterByCityName(filterByPrice(apartments))
})

const filters = ref({
  city: '',
  price: ''
})

const filterByCityName = (apartments) => {
  if (!filters.value.city) return apartments

  return apartments.filter((apartment) => apartment.location.city === filters.value.city)
}

const filterByPrice = (apartments) => {
  if (!filters.value.price) return apartments

  return apartments.filter((apartment) => apartment.price >= filters.value.price)
}
</script>

<template>
  <main class="home-page">
    <ApartmentFilterForm class="apartments-filter" @submit="filter" />
    <p v-if="!filteredApartments.length">Ничего не найдено</p>
    <ApartmentsList v-else :items="filteredApartments">
      <template v-slot:title>Title</template>
    </ApartmentsList>
  </main>
</template>

<style lang="scss" scoped>
.home-page {
  padding-top: 60px;
}
</style>
