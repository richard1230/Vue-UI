<template>
  <div>
    <Topnav/>
    <div class="content">
     <aside v-if="asideVisible">
       <h2>组件列表</h2>
       <ol>
         <li>
           <router-link to="/doc/switch">Switch</router-link>
         </li>
         <li>
           <router-link to="/doc/button">Button</router-link>
         </li>
         <li>
           <router-link to="/doc/Dialog">Dialog</router-link>
         </li>
         <li>
           <router-link to="/doc/tabs">Tabs</router-link>
         </li>
       </ol>
     </aside>
    </div>
  </div>
</template>
<script lang="ts">
  import Topnav from '../components/Topnav.vue';
  import {inject, Ref} from 'vue';
  export default {
    components:{Topnav},
    setup(){
      //标注asideVisible 类型为Ref类型
      const asideVisible = inject<Ref<boolean>>('xxx')
      console.log('topnav 获取的 asideVisible 为: '+ asideVisible.value)
     return {asideVisible}
    }
  }

</script>
<style lang="scss" scoped>
  aside {
    background: lightblue;
    width: 150px;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    > h2 {
      margin-bottom: 4px;
    }
    > ol {
      > li {
        padding: 4px 0;
      }
    }
  }
</style>
