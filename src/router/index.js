import { createRouter, createWebHistory } from 'vue-router'
import CadastroView from '../views/CadastroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Cadastro',
      component: CadastroView
    },
    {
      path: '/a',
      name: 'Início',
      component: null
    },
    {
      path: '/b',
      name: 'Agenda',
      component: null
    },
    {
      path: '/c',
      name: 'Perfil',
      component: null
    },
    {
      path: '/d',
      name: 'Relatórios',
      component: null
    }
  ]
})

export default router
