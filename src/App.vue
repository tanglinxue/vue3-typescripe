<template>
   <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo='addTodo'/>
      <List  :todos="todos" :deleteTodo='deleteTodo' :updateTodo='updateTodo'/>
      <Footer  :todos="todos" :checkAll='checkAll' :clearAllCompletedTodos='clearAllCompletedTodos'/>
    </div>
  </div>
</template>


<script lang="ts">


// defineComponent函数,目的是定义一个组件,内部可以传入一个配置对象
import { defineComponent,reactive, toRefs,watch,onMounted} from 'vue';
// 引入直接的子级组件
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
import { Todo } from './types/todo'
import { saveTodos, readTodos } from './utils/localStorageUtils'
// 暴露出去一个定义好的组件
export default defineComponent({
  name: 'App',
    // 注册组件
  components: {
    Header,
    List,
    Footer,
  },
  setup(){
     // 界面加载完毕后过了一会再读取数据
    onMounted(() => {
      setTimeout(() => {
        state.todos = readTodos()
      }, 1000)
    })
    // 定义一个数组数据
    const state = reactive<{ todos: Todo[] }>({
      todos: [],
    })
      // 添加数据的方法
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo)
    }

    const updateTodo = (todo: Todo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted
      console.log(todo)
    }
      // 删除数据的方法
    const deleteTodo = (index: number) => {
      state.todos.splice(index, 1)
    }

     // 全选或者是全不选的方法
    const checkAll = (isCompleted: boolean) => {
      // 比阿尼数组
      state.todos.forEach((todo) => {
        todo.isCompleted = isCompleted
      })
    }

        // 清理所有选中的数据
    const clearAllCompletedTodos = () => {
      state.todos = state.todos.filter((todo) => !todo.isCompleted)
    }

    watch(() => state.todos, saveTodos, { deep: true })
    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      checkAll,
      updateTodo,
      clearAllCompletedTodos
    }
  }

});
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>


