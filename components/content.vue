<template>
  <div class="content">
    <h1 class="title">
      Todo List
    </h1>
    <TodoList />
    <InputArea />
  </div>
</template>

<script>
  import TodoList from '~/components/todoList.vue';
  import InputArea from '~/components/inputArea.vue';
  export default {
    name: 'Content',
    components: {
      InputArea,
      TodoList
    }
  };

</script>

<style lang="scss" scoped>
  @import '~/assets/scss/_utils.scss';

  .content {
    width: 100%;
    max-width: 800px;
    min-height: 718px;
    padding: 15px;
    margin: auto;
    display: flex;
    background-color: $color-white;
    border: 1px $color-gray-dark solid;
    border-radius: 4px;
    flex-direction: column;
  }

  .title {
    @include title-format;

    padding-right: 15px;
    padding-left: 15px;
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: 700;
  }

</style>
