<script setup>
import SectionTitle from './SectionTitle.vue';
import InfoSymbol from './InfoSymbol.vue';
import CampoObrigatorio from './CampoObrigatorio.vue'
import { useCadastroStore } from '../../stores/CadastroStore';
import { storeToRefs } from 'pinia';

const cadastroStore = useCadastroStore()
const { cadastro, camposFaltantes } = storeToRefs(cadastroStore)

</script>
<template>
  <section>
    <SectionTitle>Identificação da pessoa</SectionTitle>
    <fieldset>
      <div class="input-container" style="margin-top: 0px">
        <label class="input-label">Nome</label>
        <input type="text" placeholder="Digite o nome" v-model="cadastro.nome">
        <CampoObrigatorio :class="{ 'warning': camposFaltantes.includes('nome') }">Preenchimento obrigatório</CampoObrigatorio>
      </div>
      <div class="input-container">
        <span style="padding-bottom: 8px"><label class="input-label">Nome Social</label><InfoSymbol/></span>
        <input type="text" placeholder="Digite o nome social" v-model="cadastro.nome_social">
      </div>
      <div class="split-container">
        <div class="input-container">
          <label class="input-label">Data de nascimento</label>
          <input v-maska data-maska="##/##/####" type="text" placeholder="01/01/2000" v-model="cadastro.data_nascimento">
          <CampoObrigatorio :class="{ 'warning': camposFaltantes.includes('data_nascimento') }">Preenchimento obrigatório</CampoObrigatorio>
        </div>
        <div class="input-container">
          <label class="input-label">Sexo biológico</label>
          <select v-model="cadastro.sexo">
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
          <CampoObrigatorio :class="{ 'warning': camposFaltantes.includes('sexo') }">Preenchimento obrigatório</CampoObrigatorio>
        </div>
      </div>
      <div class="split-container">
        <div class="input-container">
          <label class="input-label">Gênero</label>
          
          <div class="radio-grid">
            <div class="radio-box">
              <input type="radio" v-model="cadastro.genero" value="mulher_cis">
              <label class="radio">Mulher cisgênero</label>
              <InfoSymbol/>
            </div>

            <div class="radio-box">
              <input type="radio" v-model="cadastro.genero" value="mulher_trans">
              <label class="radio">Mulher transgênero</label>
              <InfoSymbol/>
            </div>

            <div class="radio-box">  
              <input type="radio" v-model="cadastro.genero" value="travesti">
              <label class="radio">Travesti</label>
              <InfoSymbol/>
            </div>

            <div class="radio-box">
              <input type="radio" v-model="cadastro.genero" value="homem_cis">
              <label class="radio">Homem cisgênero</label>
              <InfoSymbol/>
            </div>

            <div class="radio-box">
              <input type="radio" v-model="cadastro.genero" value="homem_trans">
              <label class="radio">Homem transgênero</label>
              <InfoSymbol/>
            </div>

            <div class="radio-box">
              <input type="radio" v-model="cadastro.genero" value="nao_binario">
              <label class="radio">Não binário</label>
              <InfoSymbol/>
            </div>
          </div>
        
        </div>
        <div class="input-container">
          <label class="input-label">A pessoa se considera parte do público LGBTQIA+?</label>

          <div class="radio-grid">
            <div class="radio-box">
              <input type="radio" v-model="cadastro.lgbt" value="sim">
              <label class="radio">Sim</label>
            </div>
            <div class="radio-box" style="margin-left: -170px">
              <input type="radio" v-model="cadastro.lgbt" value="não">
              <label class="radio">Não</label>
            </div>
          </div>
        </div>
      </div>
      <div class="split-container">
        <div class="input-container">
          <label class="input-label">Cor/Raça</label>
          <select v-model="cadastro.cor">
            <option value="branca">Branca</option>
            <option value="preta">Preta</option>
            <option value="parda">Parda</option>
            <option value="indigena">Indígena</option>
            <option value="amarela">Amarela</option>
            <option value="nao_declarado">Não declarada</option>
          </select>
          <CampoObrigatorio :class="{ 'warning': camposFaltantes.includes('cor') }">Preenchimento obrigatório</CampoObrigatorio>
        </div>
      </div>
    </fieldset>
  </section>
</template>
