<template>
   <h3>{{ count }}</h3>
  <button @click="updateCount">更新数据</button>
</template>

<script lang="ts">


// defineComponent函数,目的是定义一个组件,内部可以传入一个配置对象
import { defineComponent,ref} from 'vue';
 // ref是一个函数,作用:定义一个响应式的数据,返回的是一个Ref对象,对象中有一个value属性,如果需要对数据进行操作,
 //需要使用该Ref对象调用value属性的方式进行数据的操作

// 暴露出去一个定义好的组件
export default defineComponent({
  name: 'App',
  setup(){
    const count = ref(0)

    function updateCount(){
      count.value++
    }

    return {
      count,
      updateCount
    }
  }
});
</script>


