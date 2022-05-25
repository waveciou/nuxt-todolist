<template>
  <transition name="fade" mode="out-in">
    <div v-if="isShow" class="popup">
      <div class="popup__overlay" />
      <div class="popup__content">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Popup',
    props: {
      isShow: {
        type: Boolean,
        required: true
      }
    },
    watch: {
      isShow: {
        immediate: true,
        handler(value) {
          if (value === true) {
            document.documentElement.classList.add('is-fixed');
          } else {
            document.documentElement.classList.remove('is-fixed');
          }
        }
      }
    }
  };

</script>

<style lang="scss" scoped>
  @import '~/assets/scss/_utils.scss';

  .popup {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 5000;

    &__overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba($color-black, 0.7);
    }

    &__content {
      width: calc(100% - 20px);
      padding: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      overflow-x: hidden;
      overflow-y: auto;
      transform: translateX(-50%) translateY(-50%);
    }
  }

</style>
