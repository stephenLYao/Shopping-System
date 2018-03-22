
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
  }
};

export default {
  state,
  mutations
};
