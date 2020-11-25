<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div class="gulu-tabs-nav-item"
           v-for="(t,index) in titles" :ref="el => { if (el) navItems[index ] = el }"
           @click="select(t)"
           :class="{selected: t===selected}"
           :key="index">{{t}}
      </div>
      <div class="gulu-tabs-nav-indicator"
      ref="indicator"></div>
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
  import {computed, ref, onMounted, onUpdated} from 'vue';

  export default {
    props: {
      selected: {
        type: String
      }
    },
    setup(props, context) {
      //由于这里的div有两个，所以这里的类型是[]
      const navItems = ref<HTMLDivElement[]>([])
      //由于这里的蓝色横线是只有一个的，故这里的类型就是null
      const indicator = ref<HTMLDivElement>(null)

      const container = ref<HTMLDivElement>(null)

      const x = ()=>{
        const divs = navItems.value
        //filter返回的总是一个数组，故后面需要加一个[0]
        //这里是获取带有selected的div
        const result = divs.filter(div=>div.classList.contains('selected'))[0]
        console.log(result);
        //获取div的宽度
        const {width} = result.getBoundingClientRect()
        //令蓝色横线的宽度等于上面的这个div宽度
        indicator.value.style.width = width + 'px'
        const {left:left1} = container.value.getBoundingClientRect()
        const {left:left2} = result.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = left + 'px'

      }
      //只在第一次渲染的时候执行
      onMounted(x)

      onUpdated(x)
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
        currentselected,navItems,indicator,container
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
        //动画
        transition: all 250ms;
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