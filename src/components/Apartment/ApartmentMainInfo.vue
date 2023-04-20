<script setup>
import { ref } from 'vue'
import { notify } from '@kyvg/vue3-notification'

import MainButton from '../Commons/MainButton.vue'
import StarRating from '../Commons/StarRating.vue'

import { bookApartment } from '../../services/order.service'

const props = defineProps({
  apartment: {
    type: Object,
    required: true
  }
})
const isLoading = ref(false)

const handleApartmentBooking = async () => {
  try {
    isLoading.value = true
    await bookApartment({
      apartmentId: props.apartment.value.id,
      date: Date.now()
    })

    notify({
      type: 'success',
      title: 'Order added successfully'
    })
  } catch (e) {
    notify({
      type: 'error',
      title: 'Error',
      text: e.message
    })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <article class="apartment-main-info">
    <div class="apartment-main-info__heading">
      <h1 class="apartment-main-info__title">{{ props.apartment.title }}</h1>
      <StarRating :rating="props.apartment.rating" />
    </div>
    <img :src="props.apartment.imgUrl" alt="" class="apartment-main-info__photo" />
    <p class="apartment-main-info__description">{{ props.apartment.descr }}</p>
    <div class="apartment-main-info__btn">
      <MainButton @click="handleApartmentBooking" :loading="isLoading">Booking</MainButton>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.apartment-main-info {
  &__heading {
    display: flex;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 20px;
    margin-right: 20px;
  }

  &__photo {
    max-width: 100%;
  }

  &__description {
    line-height: 1.3;
    margin-top: 30px;
  }

  &__btn {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
