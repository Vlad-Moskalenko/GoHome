<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

import apartments from '../components/Apartment/apartment'
import ApartmentMainInfo from '../components/Apartment/ApartmentMainInfo.vue'
import ApartmentOwner from '../components/Apartment/ApartmentOwner.vue'
import ReviewsSection from '../components/Reviews/ReviewsSection.vue'

import reviews from '../components/Reviews/reviews.json'

const route = useRoute()

const apartment = computed(() => apartments.find((apartment) => apartment.id === route.params.id))

const reviewsList = computed(() => reviews)

onMounted(() => {
  console.log(apartment.value)
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
