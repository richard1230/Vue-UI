<template>
  <div class="topnav">
    <div class="logo" >LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>
<script lang="ts">
  import {inject, Ref} from 'vue'
  export default {
     setup(){
       //标注asideVisible 类型为Ref类型
       const asideVisible = inject<Ref<boolean>>('xxx')
       console.log('topnav 获取的 asideVisible 为: '+ asideVisible.value)
       const toggleMenu = () =>{
         asideVisible.value = !asideVisible.value
       }
       return {toggleMenu}
     }


  }
</script>
<style lang="scss" scoped>
  .topnav {
    background: pink;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;
    justify-content: center;
    align-items: center;
    > .logo {
      max-width: 6em;
      margin-right: auto;
    }
    > .menu {
      display: flex;
      //不会因为超出容器宽度而发生换行;
      //http://www.ruanyifeng.com/blog/2018/07/white-space.html
      white-space: nowrap;
      //设置换行方式,
      //nowrap: 不换行
      flex-wrap: nowrap;
      > li {
        margin: 0 1em;
      }
    }

    > .toggleAside {
      display: inline-block;
      width: 24px;
      height: 24px;
      background: red;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      //大于500px的时候,红色方块不会出现
      display: none;
    }

    //0-500px的时候，menu需要隐藏起来
    @media (max-width: 500px) {
      > .menu{
        display: none;
      }
      //0-500px的时候,logo水平居中:wq
      > .logo{
        margin: 0 auto;
      }
        //0-500px的时候,红色方块出现
      > .toggleAside{
        display: inline-block;
      }
    }
    


  }
</style>