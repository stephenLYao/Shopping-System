import http from '@/service/http';

export const state = () => {
  return {
    isAuthenticated: false, // 是否登录认证
    username: ''  // 用户名
  };
};

export const mutations = {
  SIGN_UP_REQUEST (state) {
    state.signUpPending = true;
    console.log('Sign up pending...');
  },
  SIGN_UP_SUCCESS (state, data) {
    console.log('Sign up success: ' + data);
  },
  SIGN_UP_FAILD (state, error) {
    console.log('Sign Up Failure.');
    console.error(error);
  },
  LOG_IN_REQUEST (state) {
    state.logInPending = true;
    console.log('Log in pending...');
  },
  LOG_IN_SUCCESS (state, data) {
    console.log('Log in success: ' + data);
    state.username = data.user.username;
    state.isAuthenticated = true;
  },
  LOG_IN_FAILD (state, error) {
    console.log('Log In Failure.');
    console.error(error);
  }
};

export const actions = {
  async signUp ({ commit }, payload) {
    try {
      commit('SIGN_UP_REQUEST');
      const { data } = await http.post('/users', payload);
      if (data.status === 400) {
        commit('SIGN_UP_FAILD', '注册失败');
      } else {
        commit('SIGN_UP_SUCCESS', data);
      }
    } catch (error) {
      commit('SIGN_UP_FAILD', error);
    }
  },

  async logIn ({ commit }, payload) {
    try {
      commit('LOG_IN_REQUEST');
      const { data } = await http.post('/users/log-in', payload);
      if (data.status === 400) {
        commit('LOG_IN_FAILD', '登录失败');
      } else {
        commit('LOG_IN_SUCCESS', data);
      }
    } catch (error) {
      commit('LOG_IN_FAILD', error);
    }
  }
};

export default {
  state,
  mutations,
  actions
};
