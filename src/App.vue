<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideMenu from './components/SideMenu/SideMenu.vue'
</script>

<template>
  <header>
    <SideMenu></SideMenu>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
