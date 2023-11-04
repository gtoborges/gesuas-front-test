<template>
  <div class="profile-container">
    <img src="../../assets/profile-picture.jpeg">
    <p>Augusto Borges</p>
  </div>
</template>
<style scoped>
img {
  height: 48px;
  border-radius: 100%;
  padding-left: 14px;
  padding-right: 8px;
}

.profile-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 240px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
  padding-top: 24px;
  border-top: 1px solid var(--border-color-gray);
}

.profile-container p {
  font-family: Noto Sans JP;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.4375px;
  text-align: left;
} 
</style>
