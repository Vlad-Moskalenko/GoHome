<script setup>
import { ref, computed, onMounted } from 'vue'

import ApartmentsList from '../components/Apartment/ApartmentsList.vue'
import ApartmentFilterForm from '../components/Apartment/ApartmentFilterForm.vue'
import { getApartmentsList } from '../services/apartments.service'
import ContainerMain from '../components/Commons/ContainerMain.vue'

import apartmentsData from '../components/Apartment/apartment'

const filters = ref({
  city: '',
  price: ''
})
const apartments = ref([])

const filter = ({ city, price }) => {
  filters.value.city = city
  filters.value.price = price
}

const filteredApartments = computed(() => {
  return filterByCityName(filterByPrice(apartments.value))
})

const filterByCityName = (apartments) => {
  if (!filters.value.city) return apartments

  return apartments.filter((apartment) => apartment.location.city === filters.value.city)
}

const filterByPrice = (apartments) => {
  if (!filters.value.price) return apartments

  return apartments.filter((apartment) => apartment.price >= filters.value.price)
}

onMounted(async () => {
  try {
    const { data } = await getApartmentsList()

    apartments.value = data.length ? data : apartmentsData
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <main class="home-page">
    <ContainerMain>
      <ApartmentFilterForm class="apartments-filter" @submit="filter" />
      <p v-if="!filteredApartments.length">Find nothing...</p>
      <ApartmentsList v-else :items="filteredApartments">
        <template v-slot:title>Apartments</template>
      </ApartmentsList>
    </ContainerMain>
  </main>
</template>

<style lang="scss" scoped>
.home-page {
  padding-top: 60px;
}
</style>
