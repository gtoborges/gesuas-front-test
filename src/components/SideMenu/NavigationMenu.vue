<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { InicioIcon, CadastroIcon, AgendaIcon, PerfilIcon, RelatorioIcon } from './MenuIcons'

const router = useRouter()
const route = useRoute()

const links = {
  'Início': InicioIcon, 
  'Cadastro': CadastroIcon, 
  'Agenda': AgendaIcon, 
  'Perfil': PerfilIcon, 
  'Relatórios': RelatorioIcon
}

const redirect = (key) => {
  if(route.name === key) return
  router.push({ name: key})
}

</script>
<template>
  <nav>
    <ul>
      <template v-for="key in Object.keys(links)">
        <li class="icon-links" :class="{ 'active-link': route.name == key }" @click="redirect(key)">
          <component :is="links[key]" class="menu-icon" :class="{ 'active-link': route.name == key }"></component>
          <label class="label-link" :class="{ 'active-link': route.name == key }">{{ key }}</label>
        </li>
      </template>
    </ul>
  </nav>
</template>
<style scoped>
.active-link {
  background-color: var(--red);
  color: var(--white);
  fill: var(--white) !important;
  font-weight: 700 !important;
}

.icon-links {
  margin: 8px 0;
  padding: 9px 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--text-color-dark-gray);
}

.icon-links:hover {
  cursor: pointer
}

.icon-links:first-child {
  margin-top: 16px;
}

.menu-icon {
  margin-right: 13px;
  fill: var(--text-color-dark-gray);
}

.label-link {
  font-family: Noto Sans JP;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-align: left;
  cursor: pointer;
}
</style>
