import http from '@/service/http';

export const state = () => {
  return {
    lists: []
  };
};

export const mutations = {
  GET_PROD_REQUEST () {
    console.log('Get products pending...');
  },
  GET_PROD_SUCCESS (state, data) {
    state.lists = data.lists;
    console.log('Get products success!');
  },
  GET_PROD_FAILED (state, error) {
    console.log('Get products failed' + error);
  }
};

export const actions = {
  async getProducts ({ commit }, { tag }) {
    try {
      commit('GET_PROD_REQUEST');
      const { data } = await http.get(`/products/${tag}`);
      commit('GET_PROD_SUCCESS', data);
    } catch (error) {
      commit('GET_PROD_FAILED', error);
    }
  }
};

export default {
  state,
  mutations,
  actions
};
