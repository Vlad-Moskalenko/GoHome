<script setup>
import OrdersItem from './OrdersItem.vue'

defineProps({
  ordersList: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <ul class="orders-list">
    <p v-if="!ordersList.length">No orders</p>
    <template v-else>
      <OrdersItem v-for="order in ordersList" :order="order.apartment" :key="order.id" />
    </template>
  </ul>
</template>

<style lang="scss" scoped>
.orders-list {
  margin-top: 20px;
}
</style>
