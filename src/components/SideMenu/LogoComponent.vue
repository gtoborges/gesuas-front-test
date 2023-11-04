<template>
  <div class="marca">
    <div class="logo">
      <svg enable-background="new 0 0 24 24" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="none"/><path d="m1 11h4v11h-4z"/><path d="m16 3.25c.65-.76 1.66-1.25 2.7-1.25 1.85 0 3.3 1.45 3.3 3.3 0 2.27-2.91 4.9-6 7.7-3.09-2.81-6-5.44-6-7.7 0-1.85 1.45-3.3 3.3-3.3 1.04 0 2.05.49 2.7 1.25z"/><path d="m20 17h-7l-2.09-.73.33-.94 1.76.67h2.82c.65 0 1.18-.53 1.18-1.18 0-.49-.31-.93-.77-1.11l-7.26-2.71h-1.97v9.02l7 1.98 8.01-3c-.01-1.1-.9-2-2.01-2z"/></svg>
    </div>
    <div class="lettering">
      <p>Pro</p><p>Assistência</p>
    </div>
  </div>
</template>
<style scoped>
.marca {
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 16px 0;
  border-bottom: 1px solid var(--border-color-gray);
}

.lettering {
  display: flex;
  justify-content: center;
  padding: 0 15px 0 7px;
}

.lettering p:first-child {
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
}

.lettering p:nth-child(2) {
  color: var(--red);
  font-size: 16px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
}

.logo {
  display: flex;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: var(--red);
  padding: 8px;
  color: var(--white);
  fill: white;
  box-shadow: 0px 0px 2.174273729324341px 0px #00000040;
}

</style>
