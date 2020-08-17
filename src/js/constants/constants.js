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
  // baseUrl: 'https://newsapi.org/v2/everything?'
  baseUrl: 'https://nomoreparties.co/news/v2/everything?language=ru&'
    + 'apiKey=a3389c152ac04c848350954b53570e25&'
    + 'pageSize=10&',
  headers: {
    'Content-Type': 'application/json',
  },
});
const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const headerMenuMain = document.querySelector('.header__menu-main');
const headerButtonAuthorize = document.querySelector('.header__button_authorize');
const headerMenuArticles = document.querySelector('.header__menu-articles');
const headerButtonLogout = document.querySelector('.header__button_logout');
const headerUserName = document.querySelector('.header__user-name');
const headerImgLogout = document.querySelector('.header__img-logout');
const headerMenuContainer320 = document.querySelector('.header__menu_container-320');
const headerMenu320 = document.querySelector('.header__button-320');
const headerClose320 = document.querySelector('.header__close-320');

const searchForm = document.querySelector('.search__form');
const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__button');


const popupFormAuthorize = document.querySelector('.popup__form_authorize');
const popupFormRegistration = document.querySelector('.popup__form_registration');
const popupLinkRegistration = document.querySelector('.popup__link_registration'); // ссылка Зарегистрироваться
const popupLinkAuthorize = document.querySelector('.popup__link_authorize'); // ссылка Войти
const popupLinkLogInAfterSuccessReg = document.querySelector('.popup__link_log-in'); // ссылка Выполнить вход
const articlesList = document.querySelector('.articles-list');
const resultsSearching = document.querySelector('.results__searching');
const resultsGot = document.querySelector('.results__got');
const resultsNothing = document.querySelector('.results__nothing');
const resultsServerError = document.querySelector('.results__server-error');
const resultsButton = document.querySelector('.results__button');
const results = document.querySelector('.results');


/* Экземпляры классов */
const article = new Article();
const cardList = new ArticleList(articlesList, article, resultsButton);

// Форматировние даты для запросов к newsapi
const start = Date.now(); // сегодня в мс
let dateToday = new Date();
let date7daysAgo = new Date(start - 24 * 3600 * 1000 * 7);

function dateFormat(date) {
  let m = date.getMonth() + 1;
  let d = date.getDate();
  if (m < 9) {
    m = `0${m}`;
  }
  if (d < 10) {
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
  header,
  headerLogo,
  headerMenuMain,
  headerButtonAuthorize,
  headerMenuArticles,
  headerButtonLogout,
  headerUserName,
  headerImgLogout,
  headerMenuContainer320,
  headerMenu320,
  headerClose320,
  searchForm,
  searchInput,
  searchButton,
  popupFormAuthorize,
  popupFormRegistration,
  popupLinkRegistration,
  popupLinkAuthorize,
  popupLinkLogInAfterSuccessReg,
  articlesList,
  resultsSearching,
  resultsGot,
  resultsNothing,
  resultsServerError,
  resultsButton,
  results,

  article,
  cardList,

  dateToday,
  date7daysAgo,
};
