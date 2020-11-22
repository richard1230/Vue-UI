<template>
  <div :size="size">
    <button v-bind="rest">
      <slot/>
    </button>
  </div>
</template>
<script lang="ts">

  export default {
    inheritAttrs: false,
    props:{
      size: String
    },
    setup(props,context){
      console.log({...props})
      //这种写法是遍历的写法
      console.log({...context.attrs})
      //这是es6的写法，size属性和其余的所有属性
      //size属性绑定div元素，button绑定其余元素
      const {size, ...rest} = context.attrs
      return {size,rest}
    }
  }
</script>
<style lang="scss" scoped>
  div{
    border: 1px solid red;
  }
</style>
