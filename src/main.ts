//注意css的顺序最好放在前面，不然可能会出问题
import './lib/gulu.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router';
import 'github-markdown-css'
import Markdown from './components/Markdown.vue';

const app = createApp(App)
  app.use(router)
  app.mount('#app')
app.component("Markdown",Markdown)
