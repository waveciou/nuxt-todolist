<template>
  <header class="header">
    <button type="button" class="header__menu-button">
      <img class="icon-img" src="~assets/img/menu.svg">
    </button>
    <div class="header__content">
      <strong class="header__logo">HandsUP</strong>
    </div>
    <button type="button" class="header__logout-button">
      <img class="icon-img" src="~assets/img/logout.svg">
    </button>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  };

</script>

<style lang="scss" scoped>
  @import '~/assets/scss/_utils.scss';

  .header {
    width: 100%;
    height: $header-height;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    background-color: $color-blue;
    z-index: 4000;

    &__menu-button,
    &__logout-button {
      width: $header-height;
      height: $header-height;
      position: relative;
      flex-basis: $header-height;
      flex-shrink: 0;
    }

    &__content {
      display: flex;
      align-items: center;
      flex-grow: 1;
    }

    &__logo {
      @include title-format;

      font-weight: 400;
      color: $color-white;
    }
  }

</style>
