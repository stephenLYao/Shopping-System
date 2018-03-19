import http from './http';

// 获取商品种类
export const getCategory = () => {
  return http.get('/category');
};

// 获取商品列表
export const getProductsList = (data) => {
  return http.get('/products/lists?' + data);
};
