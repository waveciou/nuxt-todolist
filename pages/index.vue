<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <Content />
    </main>
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

</style>
