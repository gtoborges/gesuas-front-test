<template>
  <div class="input-container">
    <label class="input-label">{{ label }}</label>
    <input
      v-bind="$attrs"
      :placeholder="placeholder"
      :value="value"
      v-maska
    >
    <CampoObrigatorio :class="{ 'warning': !!error }">{{ errors.concat() }}</CampoObrigatorio>
    <span>{{ $attrs, errors, value }}</span>
  </div>
</template>
<script setup>
import CampoObrigatorio from '../Cadastro/CampoObrigatorio.vue';
import { useField } from 'vee-validate';

const props = defineProps({
  name: String,
  label: String,
  placeholder: String,
});

const { value, errors } = useField(() => props.name, undefined)
</script>
