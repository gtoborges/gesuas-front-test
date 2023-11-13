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
    <SectionTitle>Local de residência</SectionTitle>
    <fieldset>
      <div class="split-container">
        <div class="input-container" style="margin-top: 0px">
          <label class="input-label">Bairro</label>
          <input type="text" placeholder="Digite o bairro" v-bind="cadastro.bairro">
          <CampoObrigatorio :class="{ 'warning': errors.bairro }">Preenchimento obrigatório</CampoObrigatorio>
        </div>
        <div class="input-container" style="margin-top: 0px">
          <label class="input-label">Endereço</label>
          <input type="text" placeholder="Selecione o endereço" v-bind="cadastro.logradouro">
          <CampoObrigatorio :class="{ 'warning': errors.logradouro }">Preenchimento obrigatório</CampoObrigatorio>
        </div>
      </div>
      <div class="split-container">
        <div class="input-container" style="margin-top: 0px">
          <label class="input-label">Número</label>
          <input type="text" placeholder="Digite o número" v-model="cadastro.numero">
        </div>
        <div class="input-container" style="margin-top: 0px">
          <label class="input-label">Complemento</label>
          <input type="text" placeholder="Ex: apartamento 22" v-model="cadastro.complemento">
        </div>
      </div>
    </fieldset>
  </section>

</template>
