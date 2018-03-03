import http from '@/service/http';

export const state = () => {
  return {
    recommends: []
  };
};

export const mutations = {

};

export const actions = {
  async getRecommends ({ commit }) {
    try {
      const { data } = await http.get('/products/recommends');
      commit('GET_REC_SUCCES', data);
    } catch (error) {
      console.error(error);
    }
  }
};

export default {
  state,
  mutations,
  actions
};
