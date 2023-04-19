<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

import CompanyLogo from '../Commons/CompanyLogo.vue'
import ContainerMain from '../Commons/ContainerMain.vue'
import AccountActions from './AccountActions.vue'
import AuthActions from './AuthActions.vue'

const store = useStore()

const isLoggedIn = ref(store.getters['auth/isLoggedIn'])
</script>

<template>
  <header class="header">
    <ContainerMain>
      <div class="header__content">
        <RouterLink to="/">
          <CompanyLogo />
        </RouterLink>
        <AccountActions v-if="isLoggedIn" />
        <AuthActions v-else />
      </div>
    </ContainerMain>
  </header>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.header {
  padding: 16px 0;

  background: $secondary-color;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
