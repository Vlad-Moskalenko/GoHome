<script setup>
import { ref } from 'vue'
import { computed } from 'vue'

import ApartmentsList from './components/Apartment/ApartmentsList.vue'
import ApartmentFilterForm from './components/Apartment/ApartmentFilterForm.vue'
import ContainerMain from './components/Commons/ContainerMain.vue'
import AppFooter from './components/Commons/AppFooter.vue'

import apartments from './components/Apartment/apartment'
import AppHeader from './components/Commons/AppHeader.vue'

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
  <div class="content">
    <AppHeader />
    <ContainerMain>
      <main class="main">
        <ApartmentFilterForm class="apartments-filter" @submit="filter" />
        <p v-if="!filteredApartments.length">Ничего не найдено</p>
        <ApartmentsList v-else :items="filteredApartments">
          <template v-slot:title>Title</template>
        </ApartmentsList>
      </main>
    </ContainerMain>
    <AppFooter />
  </div>
</template>

<style lang="scss">
.main {
  padding-top: 60px;
}

.content {
  flex-grow: 1;
}
</style>
