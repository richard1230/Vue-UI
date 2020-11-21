<template>

  <router-view/>
</template>

<script lang="ts">
  import {ref, provide} from 'vue';
  import {router} from './router';

  export default {
    name: 'App',
    setup() {
      //获取页面宽度
      const width = document.documentElement.clientWidth;
      //页面宽度小于500px时为手机，此时默认asidevisible状态为false;aside默认是不可见的
      //页面宽度大于500px时为pc端，此时默认asidevisible状态为true;aside默认是可见的
      const asidevisible = ref(width <= 500 ? false :true);
      //将xxx这个变量取名为 asidevisible
      provide('asidevisible', asidevisible);

       //先将main.ts里面与route相关的封装为一个route组件
      //然后将aside的状态设为隐藏，在每次点击之后，注意:PC端是不需要隐藏的
      router.afterEach(
        ()=>{
          if(width <= 500 ){
            asidevisible.value = false
          }
        }
      )
    }
  };
</script>
