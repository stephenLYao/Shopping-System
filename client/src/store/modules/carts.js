
export const state = () => {
  return {
    carts_count: 0,
    carts_list: []
  };
};

export const mutations = {
  ADD_CARTS (state, payload) {
    state.carts_count++;
    state.carts_list.push(payload.list);
  },
  REMOVE_CARTS (state, payload) {
    state.carts_count--;
    state.carts_list.splice(payload.index, 1);
  }
};

export default {
  state,
  mutations
};
