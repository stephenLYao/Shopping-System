let baseURL = '';
let imgURL = '';

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:9001';
  imgURL = 'http://localhost:9001/imgs';
}

export {
  baseURL,
  imgURL
};
