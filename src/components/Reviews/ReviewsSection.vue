<script setup>
import { computed, ref } from 'vue'
import ReviewsItem from './ReviewsItem.vue'
import StarRating from '../Commons/StarRating.vue'

let reviewsLimit = ref(2)

const props = defineProps({
  reviews: Array
})

const toggleReviews = () => {
  if (reviewsLimit.value === props.reviews.length) {
    reviewsLimit.value = 2
    return
  }

  reviewsLimit.value = props.reviews.length
}

const totalRating = computed(() => {
  const summaryRating = props.reviews.reduce((acc, review) => acc + review.rating, 0)

  return summaryRating / props.reviews.length
})

const amountReviews = computed(() => {
  const amount = props.reviews.length

  return amount > 1 ? amount + ' feedback' : amount + ' feedbacks'
})

const currentReviews = computed(() => props.reviews.slice(0, reviewsLimit.value))
</script>

<template>
  <section class="reviews">
    <div class="reviews__heading">
      <h2 class="reviews__title">Summary rating</h2>
      <div class="reviews__rating">
        <span>{{ amountReviews }}</span>
        <StarRating :rating="totalRating" />
      </div>
    </div>
    <ul>
      <ReviewsItem v-for="review in currentReviews" :key="review.author" :review="review" />
    </ul>
    <button @click="toggleReviews" class="reviews__show-more">
      {{ reviewsLimit === props.reviews.length ? 'Hide' : 'Read more' }}
    </button>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.reviews {
  margin-top: 20px;
  background: $card-bg;
  padding: 0 2px;

  &__heading {
    padding: 20px 20px 10px;
  }

  &__title {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__show-more {
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 12px;
    font-family: inherit;
    font-size: 16px;
  }
}
</style>
