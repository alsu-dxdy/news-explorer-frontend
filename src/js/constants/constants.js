/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-const */
import MainApi from '../api/MainApi';

const PROPS = {
  isLoggedIn: '',
};

const mainApi = new MainApi({
  baseUrl: 'https://api.iseeknews.space',
  // baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// module.exports = {
//   isLoggedIn,
//   mainApi,
// };

export {
  PROPS,
  mainApi,
};
