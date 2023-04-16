<script setup>
import ContainerMain from './components/Commons/ContainerMain.vue'
import AppFooter from './components/Commons/AppFooter.vue'
import AppHeader from './components/Commons/AppHeader.vue'
</script>

<template>
  <div class="content">
    <AppHeader />
    <ContainerMain>
      <RouterView />
    </ContainerMain>
    <AppFooter />
  </div>
</template>

<style lang="scss">
.content {
  flex-grow: 1;
}
</style>
