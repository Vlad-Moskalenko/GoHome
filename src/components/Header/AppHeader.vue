<script setup>
import CompanyLogo from '../Commons/CompanyLogo.vue'
import ContainerMain from '../Commons/ContainerMain.vue'
</script>

<template>
  <header class="header">
    <ContainerMain>
      <RouterLink to="/">
        <CompanyLogo />
      </RouterLink>
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
