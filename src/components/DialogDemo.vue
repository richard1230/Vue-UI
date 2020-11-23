<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
<!--  默认设置点击遮罩层没有响应-->
<!--  用户点击ok/cancle 的时候先执行 f1/f2，而后在关闭，这里是一个非常重要的需求
 因为在点击OK之前可能还需要进行其他操作，不能立即关闭，所以这里需要添加一个函数f1-->
  <Dialog v-model:visible="x" :closeOnClickOverlay = "false" :ok="f1" :cancle="f2">
    <template v-slot:content>
      <div>hi</div>
      <div>hi2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标签</strong>
    </template>

  </Dialog>
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