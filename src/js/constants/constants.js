/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-const */
import MainApi from '../api/MainApi';
import NewsApi from '../api/NewsApi';

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

const newsApi = new NewsApi({
  baseUrl: 'https://newsapi.org/v2/everything?pageSize=10&apiKey=a3389c152ac04c848350954b53570e25&',
  headers: {
    'Content-Type': 'application/json',
  },
});

export {
  PROPS,
  mainApi,
  newsApi,
};
