<template>
  <button @click="toggle" :class="{checked:value}">
    <span></span></button>
<!--  <div>{{value}}</div>-->
</template>
<script lang="ts">
  import {ref} from 'vue';

  export default {
    props: {
      value: Boolean
    },
    setup(props,context) {
      // const checked = ref(false);
      const toggle = () => {
        //将当前的value取反，通过input发给外面
        //!props.value与SwitchDemo里面的$event对应
        //input和SwitchDemo里面的input对应
        context.emit('update:value',!props.value)
      };
      //这里必须要导出toggle,不然模板里面不能用
      return { toggle};
    }
  };

</script>

<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  button {
    height: $h;
    width: $h*2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;
  }

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    /*如果left有变化，就让它变化1秒钟*/
    transition: all 250ms;
  }

  button.checked {
    background: #1890ff;
  }

  button.checked > span {
    left: calc(100% - #{$h2} - 2px);
  }

  button:focus {
    outline: none;
  }

  button:active{
    > span {width: $h2 + 4px;}
  }
  button.checked:active{
    > span {width: $h2 + 4px; margin-left: -4px;}
  }
</style>