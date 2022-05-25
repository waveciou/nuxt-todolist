<template>
  <nav class="nav">
    <button
      class="nav__button"
      :class="{'current': visibilities === 'all'}"
      title="All"
      @click.stop="handleSetNav('all')"
    >
      All
    </button>
    <button
      class="nav__button"
      :class="{'current': visibilities === 'todo'}"
      title="Todo"
      @click.stop="handleSetNav('todo')"
    >
      Todo
    </button>
    <button
      class="nav__button"
      :class="{'current': visibilities === 'complete'}"
      title="Complete"
      @click.stop="handleSetNav('complete')"
    >
      Complete
    </button>
  </nav>
</template>

<script>
  export default {
    name: 'TodoNav',
    props: {
      visibilities: {
        type: String,
        required: true
      }
    },
    methods: {
      handleSetNav(payload) {
        this.$emit('setVisibilities', payload);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/_utils.scss';

  .nav {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;

    @include min-width(480px) {
      width: auto;
      align-items: center;
      justify-content: flex-start;
    }

    &__button {
      margin-left: 10px;
      font-size: 16px;

      &.current {
        font-weight: 700;
        color: $color-blue;
      }
    }
  }
</style>
