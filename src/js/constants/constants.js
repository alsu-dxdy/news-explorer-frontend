/* eslint-disable no-undef */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-const */
import MainApi from '../api/MainApi';
import NewsApi from '../api/NewsApi';
import Article from '../components/Article';
import ArticleList from '../components/ArticleList';

const PROPS = {
  isLoggedIn: '',
};

const mainApi = new MainApi({
  baseUrl: 'https://api.iseeknews.space',
  headers: {
    'Content-Type': 'application/json',
  },
});

const newsApi = new NewsApi({
  baseUrl: 'https://newsapi.org/v2/everything?'
    + 'apiKey=a3389c152ac04c848350954b53570e25&'
    + 'pageSize=50&',
  headers: {
    'Content-Type': 'application/json',
  },
});
const headerButtonAuthorize = document.querySelector('.header__button_authorize');
const headerButtonName = document.querySelector('.header__button_name');
const searchForm = document.querySelector('.search__form');

const popupFormAuthorize = document.querySelector('.popup__form_authorize');
const popupFormRegistration = document.querySelector('.popup__form_registration');
const popupLinkRegistration = document.querySelector('.popup__link_registration'); // ссылка Зарегистрироваться
const popupLinkAuthorize = document.querySelector('.popup__link_authorize'); // ссылка Войти
const popupLinkLogInAfterSuccessReg = document.querySelector('.popup__link_log-in'); // ссылка Выполнить вход
const articlesList = document.querySelector('.articles-list');
const resultsSearching = document.querySelector('.results__searching');
const resultsGot = document.querySelector('.results__got');
const resultsNothing = document.querySelector('.results__nothing');
/* Экземпляры классов */
const article = new Article();
const cardList = new ArticleList(articlesList, article);

// Форматировние даты для запросов к newsapi
const start = Date.now(); // сегодня в мс
let dateToday = new Date();
let date7daysAgo = new Date(start - 24 * 3600 * 1000 * 7);

function dateFormat(date) {
  let m = date.getMonth() + 1;
  let d = date.getDate();
  if (m < 10) {
    m = `0${m}`;
  }
  if (d < 11) {
    d = `0${d}`;
  }
  return `${date.getFullYear()}-${m}-${d}`;
}
dateToday = dateFormat(dateToday);
date7daysAgo = dateFormat(date7daysAgo);


export {
  PROPS,
  mainApi,
  newsApi,
  headerButtonAuthorize,
  headerButtonName,
  searchForm,
  popupFormAuthorize,
  popupFormRegistration,
  popupLinkRegistration,
  popupLinkAuthorize,
  popupLinkLogInAfterSuccessReg,
  articlesList,
  resultsSearching,
  resultsGot,
  resultsNothing,

  article,
  cardList,

  dateToday,
  date7daysAgo,
};
