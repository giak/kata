import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { loadKatas } from './katas/loader'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Charger les katas avant de monter l'application
loadKatas().then(() => {
  app.mount('#app')
})
