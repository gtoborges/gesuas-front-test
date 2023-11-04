<script setup>
  
</script>
<template>
  <div class="under-logo">
    <p class="local">Viçosa</p>
    <div class="breadcrumb"> 
      <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.64209 8L4.5 7.05778L1.71583 4L4.5 0.942222L3.64209 0L0 4L3.64209 8Z" fill="#4B4B4B"/>
      </svg>
      <p class="breadcrumb-text">Coordenação</p>
    </div>
  </div>
</template>
<style scoped>
.local {
  padding: 12px;
  padding-top: 17px;
  font-family: Noto Sans JP;
  color: var(--text-color-gray);
  font-size: 12px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
}

.breadcrumb {
  display: flex;
  justify-content: flex-start;
  padding-left: 12px;
  padding-bottom: 16px;
  align-items: baseline;
  color: var(--text-color-dark-gray);
}

.breadcrumb-text {
  padding-left: 7px;
  font-family: Noto Sans JP;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
}

.under-logo {
  border-bottom: 1px solid var(--border-color-gray);
}
</style>
