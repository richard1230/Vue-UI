<template>
  <button class="gulu-button" :class="{[`gulu-theme-${theme}`]:theme}">
    <slot/>
  </button>
</template>
<script lang="ts">

  export default {
    props: {
      theme: {
        type: String,
        default: 'button'
      },

    },
  };
</script>
<style lang="scss" >
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $radius: 4px;
  .gulu-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    //光标呈现为指示链接的指针（一只手）
    cursor: pointer;
   //https://codepen.io/clairecodes/pen/POjKXY
    //行内布局
    display: inline-flex;
    justify-content: center;
    align-items: center;
    //http://www.ruanyifeng.com/blog/2018/07/white-space.html
    //white-space属性为nowrap时，不会因为超出容器宽度而发生换行。
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    //https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow
    //使用box-shadow来添加阴影效果
    //fade-out:这里是对黑色进行淡化
    box-shadow: 0 1px 0 fade-out(black, 0.95);

    //这里的&就是gulu-button
    & + & {
      margin-left: 8px;
    }

    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }

    &:focus {
      outline: none;
    }

    //上下两个是在一起的
    //即&:focus和&::-moz-focus-inner
    &::-moz-focus-inner {
      border: 0;
    }
  }
</style>
