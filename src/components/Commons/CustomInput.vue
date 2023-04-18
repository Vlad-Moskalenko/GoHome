<script setup>
import { ref, watch, inject, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  modelValue: String,
  errorMessage: String,
  placeholder: String,
  autocomplete: String,
  name: String,
  type: {
    type: String,
    default: 'text'
  },
  rules: {
    type: Array,
    default: () => []
  }
})

const isValid = ref(true)
const error = ref('')
const input = ref(null)

const emit = defineEmits(['update:modelValue'])

const validate = () => {
  isValid.value = props.rules.every((rule) => {
    const { hasPassed, message } = rule(props.modelValue)
    if (!hasPassed) {
      error.value = message || props.errorMessage.value
    }

    return hasPassed
  })

  return isValid
}

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}

watch(
  () => props.modelValue,
  () => validate()
)

const form = inject({
  form: {
    default: null
  }
})

onMounted(() => form?.registerInput(input))

onUnmounted(() => form?.unRegisterInput(input))
</script>

<template>
  <div class="wrapper-input">
    <input
      ref="input"
      :type="props.type"
      :value="props.modelValue"
      :name="props.name"
      @input="updateValue"
      class="custom-input"
      :placeholder="props.placeholder"
      :class="!isValid && 'custom-input--error'"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.wrapper-input {
  position: relative;
  display: inline-flex;
}

.custom-input {
  height: 40px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;

  &::placeholder {
    color: inherit;
  }

  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: red;
    line-height: 1.3;
  }
}
</style>
