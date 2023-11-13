import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useForm } from 'vee-validate'
import * as Yup from 'yup'

const schema = Yup.object({
  nome: Yup.string().required(),
  data_nascimento: Yup.string().required(),
  sexo: Yup.string().required(),
  cor: Yup.string().required(),
  rg: Yup.string().length(7).required(),
  cpf: Yup.string().length(14).required(),
  bairro: Yup.string().required(),
  logradouro: Yup.string().required()
})

export const useCadastroStore = defineStore('CadastroStore', () => {

  const { errors, defineInputBinds, handleSubmit } = useForm({
    validationSchema: schema,
  });

  const cadastro = reactive({
    nome: defineInputBinds('nome'),
    nome_social: null,
    data_nascimento: defineInputBinds('data_nascimento'),
    sexo: defineInputBinds('sexo'),
    genero: null,
    lgbt: null,
    cor: defineInputBinds('cor'),
    rg: defineInputBinds('rg'),
    cpf: defineInputBinds('cpf'),
    bairro: defineInputBinds('bairro'),
    logradouro: defineInputBinds('logradouro'),
    numero: null,
    complemento: null,
    celular: null,
    email: null
  });

  const camposFaltantes = ref([])
  
  function onInvalidSubmit({ values, errors, results }) {
    console.log('values: ', values); // current form values
    console.log('errors: ', errors); // a map of field names and their first error message
    console.log('results: ', results); // a detailed map of field names and their validation results
  }

  function onSuccess(values) {
    console.log('success: ', JSON.stringify(values, null, 2));
  }

  const validateAndSend = handleSubmit(onSuccess, onInvalidSubmit)

  return { cadastro, camposFaltantes, errors, validateAndSend }
})
