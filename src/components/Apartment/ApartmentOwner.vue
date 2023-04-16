<script setup>
defineProps({
  owner: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="apartments-owner">
    <h2 class="apartments-owner__title">Information about owner:</h2>
    <p class="apartments-owner__info">Name: {{ owner.name }}</p>
    <p class="apartments-owner__info">tel: {{ owner.phone }}</p>
    <p class="apartments-owner__info">email: {{ owner.email }}</p>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.apartments-owner {
  padding: 20px;
  background: $card-bg;
  font-weight: 400;

  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  &__info {
    margin-top: 6px;
  }
}
</style>
