<template>
  <div class="todoList">
    <transition-group name="list" tag="ul" class="todoList__wrap">
      <li v-for="todo in contextList" :key="todo.id">
        <TodoItem :todo-data="todo" @set-delete-todo="handleConfirmOpen" />
      </li>
    </transition-group>
    <Popup :is-show="deleteConfirm.isShow">
      <div class="deleteConfirm">
        <div class="deleteConfirm__title">
          確定要刪除這筆資料？
        </div>
        <div class="deleteConfirm__control">
          <button @click.stop="handleConfirmDelete">
            確定
          </button>
          <button @click.stop="handleConfirmClose">
            取消
          </button>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script>
  import TodoItem from '~/components/todoItem.vue';
  import Popup from '~/components/popup.vue';

  export default {
    data() {
      return {
        deleteConfirm: {
          isShow: false,
          id: ''
        }
      };
    },
    name: 'TodoList',
    components: {
      TodoItem,
      Popup
    },
    methods: {
      handleConfirmOpen(id) {
        this.deleteConfirm.isShow = true;
        this.deleteConfirm.id = id;
      },
      handleConfirmClose() {
        this.deleteConfirm.isShow = false;
        this.deleteConfirm.id = '';
      },
      handleConfirmDelete() {
        if (isLoading === false) {
          this.$store.dispatch('DELETE_TODO_ACTION', this.deleteConfirm.id);
        }
        this.handleConfirmClose();
      }
    },
    computed: {
      contextList() {
        return this.$store.state.todoList;
      },
      isLoading() {
        return this.$store.state.isLoading;
      }
    }
  };

</script>

<style lang="scss" scoped>
  @import '~/assets/scss/_utils.scss';

  .todoList {
    flex-grow: 1;

    &__wrap>li {
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }

  .deleteConfirm {
    width: 100%;
    max-width: 320px;
    margin: auto;
    background-color: $color-white;
    border: 1px $color-gray-dark solid;
    border-radius: 4px;

    &__title {
      padding: 25px 10px;
      font-size: 18px;
      line-height: 1.2em;
      text-align: center;
    }

    &__control {
      display: flex;
      border-top: 1px $color-gray-dark solid;

      button {
        width: 100%;
        flex-grow: 1;
        padding: 10px;
        font-size: 16px;
        line-height: 1.2em;

        &+button {
          border-left: 1px $color-gray-dark solid;
        }
      }
    }
  }

</style>
