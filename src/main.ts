import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Han from './components/Han.vue'
import Han2 from './components/Han2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/', component:Han},
        {path:'/han2',component:Han2}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
