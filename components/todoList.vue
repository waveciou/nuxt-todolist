<template>
  <div class="todoList">
    <div v-if="contextList.length < 1" class="no-data">
      {{ $t('no_data') }}
    </div>

    <transition-group v-else name="list" tag="ul" class="todoList__wrap">
      <li v-for="todo in contextList" :key="todo.id">
        <TodoItem
          :todo-data="todo"
          @setDeleteTodo="handleConfirmOpen"
        />
      </li>
    </transition-group>

    <Popup :is-show="deleteConfirm.isShow">
      <div class="deleteConfirm">
        <div class="deleteConfirm__title">
          {{ $t('delete_confirm_title') }}
        </div>
        <div class="deleteConfirm__control">
          <button @click.stop="handleConfirmDelete">
            {{ $t('delete_confirm_check') }}
          </button>
          <button @click.stop="handleConfirmClose">
            {{ $t('delete_confirm_cancel') }}
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
    props: {
      visibilities: {
        type: String,
        required: true
      }
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
        if (this.isLoading === false) {
          this.$store.dispatch('DELETE_TODO_ACTION', this.deleteConfirm.id);
        }
        this.handleConfirmClose();
      }
    },
    computed: {
      contextList() {
        return this.$store.state.todoList.filter(({ isCheck }) => {
          switch (this.visibilities) {
            case 'todo':
              return isCheck === false;
            case 'complete':
              return isCheck === true;
            default:
              return true;
          }
        });
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
      line-height: 1.6em;
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

  .no-data {
    margin-top: 40px;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    color: $color-gray-dark;
    margin-bottom: 40px;
  }

</style>
