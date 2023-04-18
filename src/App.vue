<script setup>
import AppFooter from './components/Commons/AppFooter.vue'
import AppHeader from './components/Commons/AppHeader.vue'
import AppNotifications from './components/Commons/AppNotifications.vue'
</script>

<template>
  <div class="content">
    <AppHeader />
    <RouterView />
    <AppFooter />
    <AppNotifications />
  </div>
</template>

<style lang="scss">
.content {
  flex-grow: 1;
}
</style>
