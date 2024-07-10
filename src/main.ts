import './assets/main.css'
import store from "./store";
import config from './config.json'

import { createApp } from 'vue'
import { createYmaps } from 'vue-yandex-maps';
import { router } from './router'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(createYmaps({
    apikey: config.map.apiKey,
    lang: 'ru_RU'
}))
app.mount('#app')
