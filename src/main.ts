import { createApp } from 'vue'

// @ts-ignore
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
// @ts-ignore
import Richard from './components/Richard.vue'
// @ts-ignore
import Richard2 from './components/Richard2.vue'



const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes:[
    {path:'/',component:Richard},
    {path: '/xxx',component: Richard2}
  ]
})


const app = createApp(App)
  app.use(router)
  app.mount('#app')
