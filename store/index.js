// * Vuex

export const state = () => ({
  todoList: [
    {
      id: '1111',
      text: '測試01',
      isCheck: false
    },
    {
      id: '1112',
      text: '測試02',
      isCheck: true
    }
  ],
  isLoading: false
});

export const mutations = {
  ADD_TODO(state, payload) {
    state.todoList.push(payload);
  },
  CHECK_TODO(state, payload) {

  },
  DELETE_TODO(state, payload) {

  }
};
