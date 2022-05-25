<template>
  <div class="input-area">
    <div class="input-area__control">
      <input
        v-model.trim="inputValue"
        type="text"
        class="input-area__input"
        :placeholder="$t('input_placeholder')"
        @keyup.enter="handleAddTodo"
      >
    </div>
    <button class="input-area__button" @click.stop="handleAddTodo">
      <img class="icon-img" src="~assets/img/plus.svg">
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        inputValue: ''
      };
    },
    name: 'InputArea',
    methods: {
      async handleAddTodo() {
        if (this.inputValue !== '') {
          const date = new Date();
          const result = {
            id: `${date.getTime()}`,
            text: this.inputValue,
            isCheck: false
          };

          await this.$store.dispatch('ADD_TODO_ACTION', result);
          this.inputValue = '';
          this.$emit('setVisibilities', 'todo');
        }
      }
    }
  };

</script>

<style lang="scss" scoped>
  @import '~/assets/scss/_utils.scss';

  .input-area {
    width: 100%;
    display: flex;

    &__control {
      flex-grow: 1;
      padding-right: 25px;
    }

    &__input {
      width: 100%;
      height: 35px;
      padding: 7px 14px;
      border: 1px $color-gray-dark solid;
      border-radius: 4px;
    }

    &__button {
      width: 35px;
      height: 35px;
      position: relative;
      background-color: $color-blue;
      border-radius: 4px;
    }
  }

</style>
