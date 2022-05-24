<template>
  <div class="todoItem">
    <div class="todoItem__fieldset">
      <input :id="id" v-model="isCheck" type="checkbox" class="todoItem__checkbox">
      <label :for="id" class="todoItem__heading">
        <span>{{ text }}</span>
      </label>
    </div>
    <button class="todoItem__delete-button">
      <img class="icon-img" src="~assets/img/delete.svg">
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.todoData.id,
        text: this.todoData.text,
        isCheck: this.todoData.isCheck
      };
    },
    name: 'TodoItem',
    props: {
      todoData: {
        type: Object,
        required: true
      }
    }
  };

</script>

<style lang="scss" scoped>
  @import '~/assets/scss/_utils.scss';

  $check-icon-size: 20px;
  $delete-button-size: 24px;

  .todoItem {
    padding-right: 35px;
    padding-left: 35px;
    display: flex;
    align-items: center;

    &__fieldset {
      flex-grow: 1;
      flex-basis: 0;
      position: relative;
      overflow: hidden;
    }

    &__delete-button {
      width: $delete-button-size;
      height: $delete-button-size;
      flex-basis: $delete-button-size;
      position: relative;
    }

    &__checkbox {
      display: none;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      z-index: -9999;

      &+.todoItem__heading::before {
        content: '';
        width: $check-icon-size;
        height: $check-icon-size;
        display: block;
        background: url('../assets/img/non-check.svg') no-repeat center/contain;
        flex-basis: $check-icon-size;
      }

      &:checked+.todoItem__heading::before {
        background-image: url('../assets/img/checked.svg');
      }
    }

    &__heading {
      width: 100%;
      display: flex;
      align-items: flex-start;
      cursor: pointer;

      span {
        padding-right: 15px;
        padding-left: 30px;
        font-size: 18px;
        flex-grow: 1;
        flex-basis: 0;
        line-height: 1.2em;
      }
    }
  }

</style>
