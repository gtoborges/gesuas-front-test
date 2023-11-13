<script setup>
import IdentificacaoComponent from '../components/Cadastro/IdentificacaoComponent.vue' 
import DocumentosComponent from '../components/Cadastro/DocumentosComponent.vue';
import EnderecoComponent from '../components/Cadastro/EnderecoComponent.vue';
import ContatosComponent from '../components/Cadastro/ContatosComponent.vue';

import { useCadastroStore } from '../stores/CadastroStore';

const cadastroStore = useCadastroStore()

const envidarCadastro = () => {
  window.alert('Cadastro realizado com sucesso! Mas faltou fazer um modal :(')
}

</script>
<template>
  <h1 class="main-title">Cadastro</h1>
  <form style="margin-top: 112px">
    <IdentificacaoComponent/>
    <DocumentosComponent/>
    <EnderecoComponent/>
    <ContatosComponent/>
    <div class="form-buttons">
      <button class="cancel" @click.prevent="">Cancelar</button>
      <button class="confirm" @click.prevent="cadastroStore.validateAndSend">Cadastrar</button>
    </div>
  </form>
</template>
<style scope>
.main-title {
  font-weight: 700;
  color: var(--text-color-blue);
  padding: 20px 23px;
  background-color: var(--white);
  position: fixed;
  width: 100%;
}

.form-buttons { 
  display: flex;
  justify-content: flex-end;
  margin: 24px 23px 24px 24px;
}

button {
  width: 222px;
  height: 44px;
  padding: 12px 8px 12px 8px;
  border-radius: 8px;
  gap: 10px;
  font-family: Noto Sans JP;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--white); 
  margin-bottom: 20px
}

button.cancel {
  background-color: var(--white);
  border: 1px solid var(--text-color-blue);
  color: var(--text-color-blue);
  margin-right: 15px;
}

button.confirm {
  background-color: #171559;
  margin-left: 15px;
}

button.confirm:hover{
  background-color: #403E8C;
}

</style>
