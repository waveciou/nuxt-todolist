<template>
  <div class="input-area">
    <div class="input-area__control">
      <input v-model="inputValue" type="text" class="input-area__input" placeholder="請輸入要做的事情">
    </div>
    <button class="input-area__button">
      <img src="~assets/img/plus.svg">
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
    name: 'InputArea'
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
      background-color: $color-blue;
      border-radius: 4px;

      >img {
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: scale-down;
        user-select: none;
      }
    }
  }

</style>
