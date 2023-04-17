<script setup>
import { ref } from 'vue'
import LoginForm from '../Forms/LoginForm.vue'
import CustomInput from '../Commons/CustomInput.vue'
import MainButton from '../Commons/MainButton.vue'
import { isRequired, passwordValidation, emailValidation } from '../../utils/validationRules'

const formData = ref({
  email: '',
  password: ''
})

const handleSubmit = (event) => {
  const form = event.target
  const passwordIsValid = form.password.dataset.valid && form.password.value
  const emailIsValid = form.email.dataset.valid && form.email.value
  if (passwordIsValid && emailIsValid) {
    console.log('submit')
  }
}
</script>

<template>
  <main>
    <LoginForm @submit.prevent="handleSubmit">
      <CustomInput
        v-model="formData.email"
        type="email"
        name="email"
        :rules="[isRequired, emailValidation]"
      />
      <CustomInput
        v-model="formData.password"
        type="password"
        name="password"
        :rules="[isRequired, passwordValidation]"
      />
      <MainButton type="submit">Login</MainButton>
    </LoginForm>
  </main>
</template>

<style lang="scss" scoped></style>
