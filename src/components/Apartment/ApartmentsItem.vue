<script setup>
import StarRating from '../Commons/StarRating.vue';

defineProps({
  apartmentData: Object
})

</script>

<template>
  <li class="apartments-item">
    <div class="apartments-item__inner">
      <img :src="apartmentData.imgUrl" alt="apartment" class="apartments-item__photo"/>
      <div class="apartments-item__content">
        <p class="apartments-item__description">{{ apartmentData.descr }}</p>
        <div class="apartments-item__rating">
          <StarRating :rating="apartmentData.rating"/>
        </div>
        <div class="apartments-item__price">{{ apartmentData.price }} UAH</div>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.apartments-item {
  position: relative;
  width: 31.5%;

  &__inner {
    position: relative;
  }
  &__content {
    position: relative;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.4s;
    background: rgba(#0f1d2d, 0.7);
    min-height: 200px;
    color: #fff;
    text-align: left;
    line-height: 1.4;
    cursor: pointer;
    z-index: 1;
    &:hover {
      opacity: 1;
    }
  }
  &__description {
    margin-bottom: 20px;
    max-height: calc(1em * 1.4 * 3);
    overflow: hidden;
  }
  &__rating {
    margin-bottom: 20px;
  }
  &__price {
    font-size: 20px;
    font-weight: 600;
  }
  &__photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>