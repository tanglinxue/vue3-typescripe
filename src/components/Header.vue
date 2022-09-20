<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="add"
       v-model="title"
    />
  </div>
</template>


<script lang="ts">


// defineComponent函数,目的是定义一个组件,内部可以传入一个配置对象
import { defineComponent,ref} from 'vue';
// 暴露出去一个定义好的组件
export default defineComponent({
  name: 'App',
  props:{
    addTodo:{
      type:Function,
      required:true
    }
  },
  setup(props){
    const title = ref('')
    const add = ()=>{
      // 获取文本框中输入的数据,判断不为空
      const text = title.value
      if (!text.trim()) return
      const todo = {
        id: Date.now(),
        title: text,
        isCompleted: false,
      }
      // 调用方法addTodo的方法
      props.addTodo(todo)
      // 清空文本框
      title.value = ''
    }

    return {
      title,
      add
    }
  }

});
</script>
<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>

