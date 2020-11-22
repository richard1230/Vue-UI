<template>
  <button class="gulu-switch" @click="toggle" :class="{'gulu-checked':value}">
    <span></span></button>
  <!--  <div>{{value}}</div>-->
</template>
<script lang="ts">
  import {ref} from 'vue';

  export default {
    props: {
      value: Boolean
    },
    setup(props, context) {
      // const checked = ref(false);
      const toggle = () => {
        //将当前的value取反，通过input发给外面
        //!props.value与SwitchDemo里面的$event对应
        //input和SwitchDemo里面的input对应
        context.emit('update:value', !props.value);
      };
      //这里必须要导出toggle,不然模板里面不能用
      return {toggle};
    }
  };

</script>

<style lang="scss" >
  $h: 22px;
  $h2: $h - 4px;
  .gulu-switch {
    height: $h;
    width: $h*2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;

    > span {
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

    &.gulu-checked {
      background: #1890ff;

      > span {
        left: calc(100% - #{$h2} - 2px);
      }
    }

    &:focus {
      outline: none;
    }

    &:active {
      > span {
        width: $h2 + 4px;
      }
    }

    &.gulu-checked:active {
      > span {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }
  }


</style>