<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'

import { getApartmentById } from '../services/apartments.service'

import ApartmentMainInfo from '../components/Apartment/ApartmentMainInfo.vue'
import ApartmentOwner from '../components/Apartment/ApartmentOwner.vue'
import ReviewsSection from '../components/Reviews/ReviewsSection.vue'

import reviews from '../components/Reviews/reviews.json'

const apartment = ref(null)
const route = useRoute()

const reviewsList = computed(() => reviews)

onBeforeMount(async () => {
  try {
    const { data } = await getApartmentById(route.params.id)
    apartment.value = data
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <main class="apartment-page">
    <div class="apartment-page__content">
      <ApartmentMainInfo :apartment="apartment" />
      <div class="apartment-page__additional-info">
        <ApartmentOwner :owner="apartment.owner" />
        <ReviewsSection :reviews="reviewsList" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.apartment-page {
  padding: 60px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>
