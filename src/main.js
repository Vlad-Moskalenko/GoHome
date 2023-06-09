import { createApp } from 'vue'
import Notifications from '@kyvg/vue3-notification'

import App from './App.vue'
import router from './router'
import store from './store/store'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(Notifications)
app.use(store)

app.mount('#app')
