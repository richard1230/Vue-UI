import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';

const history = createWebHashHistory()
 export const router = createRouter({
  history: history,
  routes:[
    {path:'/',component:Home},
    {path: '/doc',component: Doc,
      //child是个数组，数组里面又是路由
      children:[
        {path: 'switch',component: SwitchDemo}
      ]},
  ]
});

router.afterEach(
  ()=>{
    console.log("路由切换了");
  }
);
