<template>
  <div class="content">
    <div class="content__header">
      <h1 class="title">
        Todo List
      </h1>
      <TodoNav
        :accordance="accordance"
        @setAccordance="setAccordance"
      />
    </div>
    <TodoList :accordance="accordance" />
    <InputArea
      :accordance="accordance"
      @setAccordance="setAccordance"
    />
  </div>
</template>

<script>
  import TodoList from '~/components/todoList.vue';
  import TodoNav from '~/components/todoNav.vue';
  import InputArea from '~/components/inputArea.vue';

  export default {
    data() {
      return {
        accordance: 'all'
      };
    },
    name: 'Content',
    components: {
      InputArea,
      TodoNav,
      TodoList
    },
    methods: {
      setAccordance(payload) {
        this.accordance = payload;
      }
    }
  };

</script>

<style lang="scss" scoped>
@import '~/assets/scss/_utils.scss';

.content {
  width: 100%;
  max-width: 800px;
  min-height: 718px;
  padding: 15px;
  margin: auto;
  display: flex;
  background-color: $color-white;
  border: 1px $color-gray-dark solid;
  border-radius: 4px;
  flex-direction: column;

  &__header {
    padding-right: 15px;
    padding-left: 15px;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;

    @include min-width(480px) {
      align-items: center;
      flex-wrap: nowrap;
      justify-content: space-between;
    }
  }
}

.title {
  @include title-format;

  width: 100%;
  font-weight: 700;

  @include min-width(480px) {
    width: auto;
  }
}
</style>
