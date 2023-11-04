import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { vMaska } from "maska"

import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App).directive("maska", vMaska)

app.use(createPinia());
app.use(router);
app.use(VueSweetalert2);

app.mount('#app')
