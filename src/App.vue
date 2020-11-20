<template>

  <router-view/>
</template>

<script lang="ts">
  import {ref, provide} from 'vue';

  export default {
    name: 'App',
    setup() {
      const asidevisible = ref(false);
      //将xxx这个变量取名为 asidevisible
      provide('xxx', asidevisible);

    }
  };
</script>
