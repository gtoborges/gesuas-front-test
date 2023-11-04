<script setup>
import SectionTitle from './SectionTitle.vue';
import CampoObrigatorio from './CampoObrigatorio.vue'
import { computed } from 'vue'
import { useCadastroStore } from '../../stores/CadastroStore';
import { storeToRefs } from 'pinia';

const cadastroStore = useCadastroStore()
const { cadastro, camposFaltantes } = cadastroStore

</script>
<template>
  <section>
    <SectionTitle>cadastro</SectionTitle>
    <fieldset>
      <div class="split-container">

        <div class="input-container" style="margin-top: 0px">
          <label class="input-label">RG</label>
          <input v-maska data-maska="#######" type="text" placeholder="0000000" v-model="cadastro.rg">
          <CampoObrigatorio :class="{ 'warning': camposFaltantes.includes('rg') }">Preenchimento obrigatório RG ou de CPF</CampoObrigatorio>
        </div>
        <div class="input-container" style="margin-top: 0px">
          <label class="input-label">CPF</label>
          <input v-maska data-maska="###.###.###-##" type="text" placeholder="000.000.000-00" v-model="cadastro.cpf">
          <CampoObrigatorio :class="{ 'warning': camposFaltantes.includes('cpf') }">Preenchimento obrigatório RG ou de CPF</CampoObrigatorio>
        </div>

      </div>
    </fieldset>
  </section>
</template>
