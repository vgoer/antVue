import { createApp } from 'vue'
import './style.css'
import './reset.css'
import App from './App.vue'

const app = createApp(App)

// router 
import router from './router'
app.use(router)


// antv
// import 'ant-design-vue/dist/antd.dark.css'


app.mount('#app')