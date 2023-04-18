<script setup>
import { ref } from 'vue'
import { notify } from '@kyvg/vue3-notification'

import AuthForm from '../Forms/AuthForm.vue'
import CustomInput from '../Commons/CustomInput.vue'
import MainButton from '../Commons/MainButton.vue'
import AuthWrapper from './AuthWrapper.vue'
import AuthContainer from './AuthContainer.vue'

import { isRequired, emailValidation, passwordValidation } from '../../utils/validationRules'
import { registerUser } from '../../services/auth.service'

const formData = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})
const loading = ref(false)

const confirmPassword = () => ({
  hasPassed: formData.value.confirmPassword === formData.value.password,
  message: 'Passwords do not match'
})

const handleSubmit = async (event) => {
  const form = event.target
  const passwordIsValid = form.password.dataset.valid && form.password.value
  const emailIsValid = form.email.dataset.valid && form.email.value
  const nameIsValid = form.name.dataset.valid && form.name.value
  const { name, password, email } = formData.value

  if (passwordIsValid && emailIsValid && nameIsValid) {
    try {
      loading.value = true
      const { data } = await registerUser({ name, password, email })
      console.log(data)
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

  event.currentTarget.reset()
}
</script>

<template>
  <AuthWrapper>
    <AuthContainer class="register">
      <h1 class="register__title">Register</h1>
      <AuthForm class="register__form" @submit.prevent="handleSubmit">
        <CustomInput
          v-model="formData.name"
          type="text"
          name="name"
          autocomplete="username"
          :rules="[isRequired]"
          class="register__input"
          placeholder="Name"
        />
        <CustomInput
          v-model="formData.email"
          type="email"
          name="email"
          autocomplete="email"
          :rules="[isRequired, emailValidation]"
          class="register__input"
          placeholder="Email"
        />
        <CustomInput
          v-model="formData.password"
          autocomplete="new-password"
          type="password"
          name="password"
          :rules="[isRequired, passwordValidation]"
          class="register__input"
          placeholder="Password"
        />
        <CustomInput
          v-model="formData.confirmPassword"
          autocomplete="new-password"
          type="password"
          name="confirmPassword"
          :rules="[isRequired, confirmPassword]"
          class="register__input"
          placeholder="Confirm password"
        />
        <MainButton class="register__btn" type="submit" :loading="loading">Register</MainButton>
      </AuthForm>
    </AuthContainer>
  </AuthWrapper>
</template>

<style lang="scss" scoped>
.register {
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
