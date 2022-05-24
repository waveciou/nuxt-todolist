<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <Content />
    </main>
    <transition name="fade" mode="out-in">
      <div v-if="isLoading" class="loader" />
    </transition>
  </div>
</template>

<script>
  import header from '~/components/header.vue';
  import content from '~/components/content.vue';
  export default {
    name: 'Home',
    components: {
      Header: header,
      Content: content
    },
    computed: {
      isLoading() {
        return this.$store.state.isLoading;
      }
    }
  };

</script>

<style lang="scss" scoped>
  @import '~/assets/scss/_utils.scss';

  .wrapper {
    padding-top: $header-height;
  }

  .main {
    padding: 16px 10px;
  }

  .loader {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: $color-blue;
    opacity: 0.6;
    z-index: 6000;
  }

</style>
