<template>

  <router-view/>
</template>

<script>
import Richard from './components/Richard.vue'

export default {
  name: 'App',
  components: {
    // 左边是标签名,右边是组件的引用
    // HelloWorld:HelloWorld===>其实课缩写为一个HelloWorld
    Richard
  }
}
</script>
