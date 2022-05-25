<template>
  <nav class="nav">
    <button
      type="button"
      class="nav__button"
      :class="{'current': visibilities === 'all'}"
      :title="$t('nav_all')"
      @click.stop="handleSetNav('all')"
    >
      {{ $t('nav_all') }}
    </button>
    <button
      type="button"
      class="nav__button"
      :class="{'current': visibilities === 'todo'}"
      :title="$t('nav_todo')"
      @click.stop="handleSetNav('todo')"
    >
      {{ $t('nav_todo') }}
    </button>
    <button
      type="button"
      class="nav__button"
      :class="{'current': visibilities === 'complete'}"
      :title="$t('nav_complete')"
      @click.stop="handleSetNav('complete')"
    >
      {{ $t('nav_complete') }}
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
      margin-left: 15px;
      font-size: 16px;
      border-bottom: 2px transparent solid;

      &.current {
        font-weight: 500;
        color: $color-blue;
        border-bottom-color: $color-blue;
      }
    }
  }
</style>
