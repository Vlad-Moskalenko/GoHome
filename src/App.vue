<script setup>
import AppFooter from './components/Commons/AppFooter.vue'
import AppHeader from './components/Commons/AppHeader.vue'
</script>

<template>
  <div class="content">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>

<style lang="scss">
.content {
  flex-grow: 1;
}
</style>
