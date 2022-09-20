<template>
  <h2>自定义hook函数操作</h2>
    <h2>x:{{ x }},y:{{ y }}</h2>
    <h3>正在加载中。。。</h3>
</template>


<script lang="ts">


// defineComponent函数,目的是定义一个组件,内部可以传入一个配置对象
import { defineComponent} from 'vue';
import useMousePosition from './hooks/useMousePosition'
import {useRequest} from './hooks/useRequest'
// 暴露出去一个定义好的组件
export default defineComponent({
  name: 'App',
  setup() {
    const {x,y} = useMousePosition()
    const {loading,data,errorMsg} = useRequest('地址1')
    const {loading,data,errorMsg} = useRequest('地址2')
    return {
      x,
      y
    }
  },

});
</script>


