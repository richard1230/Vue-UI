<template>
  <div>
     <Topnav />
    <div>
      <div class="banner">
        <h1></h1>gulu-UI</h1>
        <h2>an awesome UI</h2>
      </div>
      <p class="actions">
        <a>github</a>
        <a>start</a>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
  import Topnav from "../components/Topnav.vue";
  export  default {
    components: { Topnav },
  };
</script>
<style lang="scss" scoped>
  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    //https://www.ruanyifeng.com/blog/2015/07/flex-examples.html
    flex-direction: column;
    background: lightgreen;
    > .actions{
      padding: 8px 0;
      a {
        margin:0 8px;
        background: #fff;
        /*内联元素制定宽高没有效果. 使用这个字段display: inline-block;*/
        display: inline-block;
        $h: 28px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 8px;
      }
    }
  }
</style>