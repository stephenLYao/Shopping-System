import axios from 'axios';

export const state = () => {
  return {
    isAuthenticated: false,
    token: '',
    username: '',
    email: '',
    admin: false
  };
};

export const mutations = {
  SIGN_UP_REQUEST (state) {
    state.signUpPending = true;
    console.log('Sign up pending...');
  },
  SIGN_UP_SUCCESS (state, user) {
    console.log('Sign up success: ' + user);
  },
  SIGN_UP_FAILD (state, error) {
    console.log('Sign Up Failure.');
    console.error(error);
  }
};

export const actions = {
  async signUp ({ commit }, payload) {
    try {
      commit('SIGN_UP_REQUEST');
      const { data } = await axios.post('/users', payload);
      commit('SIGN_UP_SUCCESS', data);
    } catch (error) {
      commit('SIGN_UP_FAILD', error);
    }
  }
};
