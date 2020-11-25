<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div class="gulu-tabs-nav-item"
           v-for="(t,index) in titles" :ref="el => { if (el) navItems[index ] = el }"
           @click="select(t)"
           :class="{selected: t===selected}"
           :key="index">{{t}}
      </div>
      <div class="gulu-tabs-nav-indicator"></div>
    </div>
    <!--    这里有个注意点: 用了v-for,就要用 :key-->
    <div class="gulu-tabs-content">
      <component class="gulu-tabs-content-item"
                 :class="{selected: c.props.title === selected}"
                 v-for="c in defaults" :is="c"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Tab from './Tab.vue';
  import {computed, ref, onMounted} from 'vue';

  export default {
    props: {
      selected: {
        type: String
      }
    },
    setup(props, context) {
      const navItems = ref([])
      onMounted(()=>{
          console.log(...navItems.value)
      })
      //defaults也会在上面的div样式里面会用到
      const defaults = context.slots.default();
      defaults.forEach((tag) => {
        if (tag.type !== Tab) {
          throw new Error('Tabs 子标签必须是 Tab');
        }
      });
      //filter函数返回的肯定是个数组,
      //到目前为止，其实我感觉这个currentselected可能可有可无
      const currentselected = computed(() => {
        return defaults.filter((tag) => {
          return tag.props.title === props.selected;
        })[0];
      });

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
        defaults, titles, select,
        currentselected,navItems
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
        //其实这边宽度写死了是不对的
        width: 100px;
      }

    }

    &-content {
      padding: 8px 0;

      &-item {
        display: none;

        &.selected {
          display: block;
          color: red;
        }
      }
    }
  }
</style>