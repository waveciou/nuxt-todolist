// * Vuex

const simulationPostAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

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
  SET_ADD_TODO(state, payload) {
    state.todoList.push(payload);
  },
  SET_CHECK_TODO(state, payload) {

  },
  SET_DELETE_TODO(state, payload) {

  },
  SET_ISLOADING(state, payload) {
    state.isLoading = payload;
  }
};

export const actions = {
  async ADD_TODO_ACTION({ commit }, payload) {
    commit('SET_ISLOADING', true);

    await simulationPostAPI().then(() => {
      commit('SET_ADD_TODO', payload);
      commit('SET_ISLOADING', false);
    });
  }
};
