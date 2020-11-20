<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
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
  }
</style>