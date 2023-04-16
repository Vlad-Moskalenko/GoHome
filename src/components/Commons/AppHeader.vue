<script setup>
import CompanyLogo from './CompanyLogo.vue'
import ContainerMain from './ContainerMain.vue'
</script>

<template>
  <header class="header">
    <ContainerMain>
      <CompanyLogo />
    </ContainerMain>
  </header>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.header {
  padding: 16px 0;

  background: $secondary-color;
}
</style>
