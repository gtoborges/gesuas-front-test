<script setup>
import SectionTitle from './SectionTitle.vue';
import CampoObrigatorio from './CampoObrigatorio.vue'
import { useCadastroStore } from '../../stores/CadastroStore';
import { storeToRefs } from 'pinia';

const cadastroStore = useCadastroStore()
const { cadastro, errors } = storeToRefs(cadastroStore)

</script>
<template>
  <section>
    <SectionTitle>cadastro</SectionTitle>
    <fieldset>
      <div class="split-container">

        <div class="input-container" style="margin-top: 0px">
          <label class="input-label">RG</label>
          <input v-maska data-maska="#######" type="text" placeholder="0000000" v-bind="cadastro.rg">
          <CampoObrigatorio :class="{ 'warning': errors.rg }">Preenchimento obrigatório RG ou de CPF</CampoObrigatorio>
        </div>
        <div class="input-container" style="margin-top: 0px">
          <label class="input-label">CPF</label>
          <input v-maska data-maska="###.###.###-##" type="text" placeholder="000.000.000-00" v-bind="cadastro.cpf">
          <CampoObrigatorio :class="{ 'warning': errors.cpf }">Preenchimento obrigatório RG ou de CPF</CampoObrigatorio>
        </div>

      </div>
    </fieldset>
  </section>
</template>
