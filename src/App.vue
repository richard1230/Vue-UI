<template>

  <router-view/>
</template>

<script lang="ts">
  import {ref, provide} from 'vue';

  export default {
    name: 'App',
    setup() {
      //获取页面宽度
      const width = document.documentElement.clientWidth;
      //页面宽度小于500px时为手机，此时默认asidevisible状态为false;aside默认是不可见的
      //页面宽度大于500px时为pc端，此时默认asidevisible状态为true;aside默认是可见的
      const asidevisible = ref(width <= 500 ? false:true);
      //将xxx这个变量取名为 asidevisible
      provide('xxx', asidevisible);

    }
  };
</script>
