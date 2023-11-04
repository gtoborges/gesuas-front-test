import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useForm } from 'vee-validate'
import * as Yup from 'yup'

export const useCadastroStore = defineStore('CadastroStore', () => {

  const cadastro = reactive({
      nome: null,
      nome_social: null,
      data_nascimento: null,
      sexo: null,
      genero: null,
      lgbt: null,
      cor: null,
      rg: null,
      cpf: null,
      bairro: null,
      logradouro: null,
      numero: null,
      complemento: null,
      celular: null,
      email: null
  });

  const camposFaltantes = ref([])

  return { cadastro, camposFaltantes }
})
