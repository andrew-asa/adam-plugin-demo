import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { start } from './startup'
import router from './router'

const app = createApp(App)
start(app)
app.use(router)
app.mount('#app')
