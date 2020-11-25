<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div class="gulu-tabs-nav-item"
           v-for="(t,index) in titles" :ref="el => { if (t===selected) selectedItem = el }"
           @click="select(t)"
           :class="{selected: t===selected}"
           :key="index">{{t}}
      </div>
      <div class="gulu-tabs-nav-indicator"
           ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component  :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Tab from './Tab.vue';
  import {ref, onMounted, onUpdated, watchEffect, computed} from 'vue';

  export default {
    props: {
      selected: {
        type: String
      }
    },
    setup(props, context) {
      //由于这里的div有两个，所以这里的类型是[]
      const selectedItem = ref<HTMLDivElement>(null);
      //由于这里的蓝色横线是只有一个的，故这里的类型就是null
      const indicator = ref<HTMLDivElement>(null);

      const container = ref<HTMLDivElement>(null);

      const x = () => {

        //获取div的宽度
        const {
          width
        } = selectedItem.value.getBoundingClientRect();
        //令蓝色横线的宽度等于上面的这个div宽度
        indicator.value.style.width = width + 'px';
        //container包含了导航1和导航2，这里的left1是container的left
        const {left: left1} = container.value.getBoundingClientRect();
        //这里的left2是导航2的div的left
        const {left: left2} = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + 'px'
      };
      //只在第一次渲染的时候执行
      onMounted(()=>{watchEffect(x)});
      //
      // onUpdated(x);//后面几次

      //其实这是第二处优化，但是我这捞出bug，就没这么干
      // watchEffect(x)
      //defaults也会在上面的div样式里面会用到
      const defaults = context.slots.default();
      defaults.forEach((tag) => {
        if (tag.type !== Tab) {
          throw new Error('Tabs 子标签必须是 Tab');
        }
      });

      const current = computed(() => {
        return defaults.find(tag => tag.props.title === props.selected)
      })

      //titles在上面的div里面会用到
      //title就是导航1和导航2，map函数是一个一个遍历
      const titles = defaults.map((tag) => {
        return tag.props.title;
      });
      //下面这个select函数在上面的div里面会触发
      const select = (title: string) => {
        context.emit('update:selected', title);
      };
      return {
        current,
        defaults,
        titles,
        select,
        selectedItem,
        indicator,
        container
      };
    }
  };
</script>
<style lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .gulu-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;
      position: relative;

      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;

        &:first-child {
          margin-left: 0;
        }

        &.selected {
          color: $blue;
        }
      }

      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        //其实这边宽度写死了是不对的,后面又添加了其他的代码来改进
        width: 100px;
        //动画
        transition: all 250ms;
      }

    }

    &-content {
      padding: 8px 0;
    }
  }
</style>