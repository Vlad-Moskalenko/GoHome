<script setup>
import StarRating from '../Commons/StarRating.vue'
defineProps({
  review: Object
})
</script>

<template>
  <li class="reviews-item">
    <div class="reviews-heading">
      <img src="../../../img/avatar.svg" class="reviews-heading__avatar" alt="review.author" />
      <div class="reviews-heading__content">
        <span class="reviews-heading__author">{{ review.author }}</span>
        <StarRating :rating="review.rating" />
      </div>
    </div>
    <p class="reviews-item__content">{{ review.content }}</p>
  </li>
</template>

<style lang="scss" scoped>
.reviews-item {
  background: #fff;
  padding: 20px 22px;
  line-height: 1.3;
  margin-bottom: 2px;

  &:last-child {
    margin-bottom: 0;
  }

  &__content {
    display: -webkit-box;
    margin-top: 20px;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
}

.reviews-heading {
  display: flex;
  align-items: center;

  &__avatar {
    margin-right: 18px;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }
}
</style>
