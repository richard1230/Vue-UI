<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-King"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li> <router-link to="/doc">文档</router-link></li>
    </ul>
    <svg  v-if="toggleMenuButtonVisible"
      class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
  import {inject, Ref} from 'vue'
  export default {
    props:{
      toggleMenuButtonVisible:{
        type: Boolean,
        default:false
      }
    },
     setup(){
       //标注asideVisible 类型为Ref类型
       const asideVisible = inject<Ref<boolean>>('asidevisible')
       console.log('topnav 获取的 asideVisible 为: '+ asideVisible.value)
       const toggleMenu = () =>{
         asideVisible.value = !asideVisible.value
       }
       return {toggleMenu}
     }


  }
</script>
<style lang="scss" scoped>
  $color: #179c97;
  .topnav {
    color: $color;
    /*background: pink;*/
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    align-items: center;
    > .logo {
      max-width: 6em;
      margin-right: auto;
      > svg{
        width: 32px;
        height: 32px;
      }
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
      width: 32px;
      height: 32px;
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