// * Vuex

const simulationPostAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

export const state = () => ({
  todoList: [],
  isLoading: false
});

export const mutations = {
  SET_TODOLIST(state, payload) {
    state.todoList = [...payload];
  },
  SET_ADD_TODO(state, payload) {
    state.todoList.push(payload);
    localStorage.setItem('nuxt-todolist', JSON.stringify(state.todoList));
  },
  SET_CHECK_TODO(state, payload) {
    const index = state.todoList.findIndex(({ id }) => id === payload.id);
    if (index >= 0) {
      state.todoList[index].isCheck = payload.isCheck;
      localStorage.setItem('nuxt-todolist', JSON.stringify(state.todoList));
    }
  },
  SET_DELETE_TODO(state, payload) {
    state.todoList.splice(payload, 1);
    localStorage.setItem('nuxt-todolist', JSON.stringify(state.todoList));
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
  },
  async DELETE_TODO_ACTION({ state, commit }, payload) {
    commit('SET_ISLOADING', true);

    await simulationPostAPI().then(() => {
      const index = state.todoList.findIndex(({ id }) => id === payload);
      if (index >= 0) {
        commit('SET_DELETE_TODO', index);
      } else {
        window.alert('刪除失敗');
      }
      commit('SET_ISLOADING', false);
    });
  }
};
