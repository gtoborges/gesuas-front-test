<script setup>
import SectionTitle from './SectionTitle.vue';
import { useCadastroStore } from '../../stores/CadastroStore';
import { storeToRefs } from 'pinia';

const cadastroStore = useCadastroStore()
const { cadastro } = cadastroStore

</script>
<template>
  <section>
    <SectionTitle>Contatos</SectionTitle>
    <fieldset>
      <div class="split-container">

        <div class="input-container" style="margin-top: 0px">
          <label class="input-label">Celular</label>
          <input v-maska data-maska="(##) #####-####" type="text" placeholder="(00) 00000-0000" v-model="cadastro.celular">
        </div>
        <div class="input-container" style="margin-top: 0px">
          <label class="input-label">E-mail</label>
          <input type="email" placeholder="Digite o e-mail" v-model="cadastro.email">
        </div>

      </div>
    </fieldset>
  </section>

</template>
