<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
<!--  默认设置点击遮罩层没有响应-->
  <Dialog v-model:visible="x" :closeOnClickOverlay = "false"
  :ok="f1" :cancle="f2"
  ></Dialog>
</template>
<script lang="ts">
  import Dialog from '../lib/Dialog.vue'
  import Button from '../lib/Button.vue';
  import {ref} from "vue"
  export default {
    components:{
      Button,
      Dialog
    },

    setup(){
      const x = ref(false);
      const toggle = ()=>{
        x.value = !x.value
      }

      const f1=()=>{
        console.log(1)
        return false
      }
      const f2=()=> {
        console.log(2)
      }
      return {
        x,toggle,f1,f2
      }
    }
  }

</script>