<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { notify } from '@kyvg/vue3-notification'

import AuthForm from '../Forms/AuthForm.vue'
import CustomInput from '../Commons/CustomInput.vue'
import MainButton from '../Commons/MainButton.vue'
import AuthWrapper from './AuthWrapper.vue'
import AuthContainer from './AuthContainer.vue'

import { isRequired, emailValidation } from '../../utils/validationRules'
import router from '../../router'

const loading = ref(false)
const formData = ref({
  email: '',
  password: ''
})
const store = useStore()

const handleSubmit = async () => {
  // const form = event.target
  // const passwordIsValid = form.password.dataset.valid && form.password.value
  // const emailIsValid = form.email.dataset.valid && form.email.value

  try {
    loading.value = true

    await store.dispatch('auth/login', formData.value)

    router.push({ name: 'home' })
  } catch (e) {
    notify({
      type: 'error',
      title: 'Error',
      text: e.message
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <AuthWrapper>
    <AuthContainer class="login">
      <h1 class="login__title">Login</h1>
      <AuthForm class="login__form" @submit.prevent="handleSubmit">
        <CustomInput
          v-model="formData.email"
          type="email"
          name="email"
          autocomplete="email"
          :rules="[isRequired, emailValidation]"
          class="login__input"
          placeholder="Email"
        />
        <CustomInput
          v-model="formData.password"
          autocomplete="current-password"
          type="password"
          name="password"
          :rules="[isRequired]"
          class="login__input"
          placeholder="Password"
        />
        <MainButton class="login__btn" type="submit" :loading="loading">Login</MainButton>
      </AuthForm>
    </AuthContainer>
  </AuthWrapper>
</template>

<style lang="scss" scoped>
.login {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 0.5em;
    text-align: center;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
