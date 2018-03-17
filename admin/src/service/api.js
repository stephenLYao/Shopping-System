import http from './http';

// 登录
export const login = (data) => {
  return http.post('/admin/user/login', data);
};

// 登出
export const logout = () => {
  return http.post('/admin/user/logout');
};

// 某天用户注册量
export const getUserCount = (date) => {
  return http.get('/admin/user/count/' + date);
};

// 获取用户总注册量
export const getAllUserCounts = () => {
  return http.get('/admin/user/counts');
};

// 获取用户列表
export const getUserLists = (data) => {
  return http.get('/admin/user/lists?' + data);
};

// 获取商品种类
export const getCategory = () => {
  return http.get('/category');
};

// 添加商品种类
export const addCategory = (data) => {
  return http.post('/category', data);
};
