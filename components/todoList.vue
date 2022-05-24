<template>
  <ul class="todoList">
    <li v-for="todo in contextList" :key="todo.id">
      <TodoItem :todo-data="todo" />
    </li>
  </ul>
</template>

<script>
  import todoItem from '~/components/todoItem.vue';

  export default {
    name: 'TodoList',
    components: {
      TodoItem: todoItem
    },
    computed: {
      contextList() {
        return this.$store.state.todoList;
      }
    }
  };

</script>

<style lang="scss" scoped>
  @import '~/assets/scss/_utils.scss';

  .todoList {
    flex-grow: 1;

    >li {
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }

</style>
