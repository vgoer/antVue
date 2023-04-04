import { createApp } from 'vue'
import './style.css'
import './reset.css'
import App from './App.vue'

const app = createApp(App)

// router 
import router from './router'
app.use(router)


// element
import 'element-plus/theme-chalk/dark/css-vars.css'


//tw 
import './index.css'

// pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)


app.mount('#app')
