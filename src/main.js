import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from "./router/index"

const app = createApp(App);
const pinia = createPinia();
createApp(App).use(router).use(pinia).mount('#app')