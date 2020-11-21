<template>
  <div>
<!--    冒号表示传的是变量y,没有冒号表示传的是字符串y-->
<Switch v-model:value="y" />
  </div>
</template>

<script lang="ts">
  import Switch from '../lib/Switch.vue'
  import { ref } from 'vue'
  export default {
    components:{Switch},
    setup(){
      const y = ref(false)
      return {y}
    }
  }
</script>