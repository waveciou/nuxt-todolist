<template>
  <div class="lang">
    <button
      type="button"
      class="lang__button"
      :class="{'current': $i18n.locale === 'zh'}"
      @click.stop="handleSetLang('zh')"
    >
      中文
    </button>
    <button
      type="button"
      class="lang__button"
      :class="{'current': $i18n.locale === 'en'}"
      @click.stop="handleSetLang('en')"
    >
      EN
    </button>
  </div>
</template>

<script>
  export default {
    name: 'LangNav',
    methods: {
      handleSetLang(payload) {
        this.$emit('setLang', payload);
      }
    }
  };

</script>

<style lang="scss" scoped>
@import '~/assets/scss/_utils.scss';

.lang {
  width: 100%;
  max-width: 800px;
  margin: 0 auto 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &__button {
    margin: 0 10px;
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
