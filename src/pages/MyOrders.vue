<script setup>
import { notify } from '@kyvg/vue3-notification'
import { onMounted, ref } from 'vue'
import ContainerMain from '../components/Commons/ContainerMain.vue'
import OrdersList from '../components/MyOrders/OrdersList.vue'
import { getOrders } from '../services/order.service'

const orders = ref([])

onMounted(async () => {
  try {
    const { data } = await getOrders()
    orders.value = data
  } catch (e) {
    notify({
      type: 'error',
      title: 'Error',
      text: e.message
    })
  }
})
</script>

<template>
  <main class="my-orders">
    <ContainerMain>
      <section class="my-orders__content">
        <h1 class="my-orders__title">Orders</h1>
        <OrdersList :ordersList="orders" />
      </section>
    </ContainerMain>
  </main>
</template>

<style lang="scss" scoped>
.my-orders {
  &__content {
    max-width: 730px;
    margin: 0 auto 100px;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 0.5em;
  }
}
</style>
