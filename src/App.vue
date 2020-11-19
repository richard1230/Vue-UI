<template>
  <div>hi | <router-link to = "/">Richard</router-link>| <router-link to = '/xxx'>
    Richard2</router-link></div>
  <hr/>
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
