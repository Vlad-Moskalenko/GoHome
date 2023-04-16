<script setup>
import { computed } from 'vue';
import CustomInput from '../Commons/CustomInput.vue';
import CustomSelect from '../Commons/CustomSelect.vue';
import MainButton from '../Commons/MainButton.vue';

const emit = defineEmits(['submit'])

const cities = computed(() =>
      ([
        'Kyiv',
        'Odesa',
        'Poltava',
        'Kharkiv',
        'Dnipro',
        'Lviv',
        'Kherson',
        'Mariupol',
      ]))

const handleSubmit = () => {
  emit('submit', data)
}

const data = {
  price: '',
  city: '',
}

</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :options="cities" v-model="data.city" class="form__select" />
    <CustomInput v-model="data.price" placeholder="Price"/>
    <MainButton class="form__submit" type="submit">Подбор жилья</MainButton>
  </form>
</template>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>
