// * Vuex

export const state = () => ({
  todoList: [],
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
