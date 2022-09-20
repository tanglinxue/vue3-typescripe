<template>
   <ul class="todo-main">
        <Item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      :deleteTodo="deleteTodo"
      :updateTodo="updateTodo"
      :index="index"
    />
  </ul>
</template>


<script lang="ts">


// defineComponent函数,目的是定义一个组件,内部可以传入一个配置对象
import { defineComponent} from 'vue';
import Item from './Item.vue'
// 暴露出去一个定义好的组件
export default defineComponent({
  name: 'List',
  components: {
    Item,
  },
  props: ['todos', 'deleteTodo','updateTodo'],
})
</script>
<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>

