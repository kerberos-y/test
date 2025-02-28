// src/main.js

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Создаем и подключаем Pinia
const pinia = createPinia()

app.use(pinia)  // Подключаем Pinia к приложению
app.use(router) // Подключаем Vue Router
app.mount('#app')
