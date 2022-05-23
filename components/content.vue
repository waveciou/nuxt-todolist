<template>
  <div class="content">
    <h1 class="title">
      Todo List
    </h1>
  </div>
</template>

<script>
  export default {
    name: 'Content'
  };

</script>

<style lang="scss" scoped>
  @import '~/assets/scss/_utils.scss';

  .content {
    width: 100%;
    max-width: 800px;
    min-height: 718px;
    padding: 33px 30px;
    margin: auto;
    background-color: $color-white;
    border: 1px $color-gray-dark solid;
    border-radius: 4px;
  }

  .title {
    @include title-format;

    font-weight: 700;
  }

</style>
