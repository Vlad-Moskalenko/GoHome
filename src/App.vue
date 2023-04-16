<script setup>
import { ref } from 'vue';
import ApartmentsList from './components/Apartment/ApartmentsList.vue';
import ApartmentFilterForm from './components/Apartment/ApartmentFilterForm.vue';
import ContainerMain from './components/Commons/ContainerMain.vue';

import apartments from './components/Apartment/apartment'
import { computed } from 'vue';

const filter = ({city, price}) => {
  filters.value.city = city,
  filters.value.price = price
}

const filteredApartments = computed(() => {
  return filterByCityName(filterByPrice(apartments))
})

const filters = ref({
  city: '',
  price: ''
})

const filterByCityName = (apartments) => {
  if(!filters.value.city) return apartments

  return apartments.filter(apartment => apartment.location.city === filters.value.city)
}

const filterByPrice = (apartments) => {
  if(!filters.value.price) return apartments

  return apartments.filter(apartment => apartment.price >= filters.value.price)
}

</script>

<template>
    <ContainerMain>
      <ApartmentFilterForm class="apartments-filter" @submit="filter"/>
      <p v-if="!filteredApartments.length">Ничего не найдено</p>
      <ApartmentsList v-else :items="filteredApartments">
        <template v-slot:title>Title</template>
      </ApartmentsList>
    </ContainerMain>
</template>
