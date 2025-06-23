import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

const app = createApp(App)
app.use(router)

app.use(Toast,{
    position:"top-center"
});

app.mount('#app')
