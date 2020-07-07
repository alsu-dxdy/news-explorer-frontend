/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
import Article from './js/components/Article';
import ArticleList from './js/components/ArticleList';
import MainApi from './js/api/MainApi';
import NewsApi from './js/api/NewsApi';
import Popup from './js/components/Popup';
import FormValidator from './js/components/FormValidator';

import './css/style.css';

import {
  PROPS, mainApi, newsApi, headerButtonAuthorize, headerButtonName,
  searchForm, popupFormAuthorize, popupFormRegistration, popupLinkRegistration,
  popupLinkAuthorize, popupLinkLogInAfterSuccessReg, articlesList,
  resultsSearching, resultsGot, resultsNothing, resultsButton, article, cardList,
  dateToday, date7daysAgo,
} from './js/constants/constants';

const { headerRender, headerRenderLogout } = require('./js/utils/headerRender');

const headerMenu320 = document.querySelector('.header__button-320');
const headerClose320 = document.querySelector('.header__close-320');

/* Экземпляры классов */
const popupAuthorize = new Popup(document.querySelector('.popup_authorize'));
const popupRegistration = new Popup(document.querySelector('.popup_registration'));
const popupSuccessRegistration = new Popup(document.querySelector('.popup_success-registration'));

/* Экземпляры для валидации (слушатели внутри класса FormValidator) */
const formVAlidAuthorize = new FormValidator(document.querySelector('.popup_authorize'));
const formVAlidRegistration = new FormValidator(document.querySelector('.popup_registration'));

/* -----Слушатели событий----- */
window.addEventListener('load', () => {
  // функция для проверки авторизованности юзера
  checkLogged();
});

headerMenu320.addEventListener('click', () => {
  console.log(77);
  // document.querySelector('.header').style.background = '#1A1B22';
  // headerMenu320.style.background = 'none';
  document.querySelector('.header').classList.toggle('header_black-background');
  headerMenu320.classList.add('header__menu_invisible');
  headerClose320.classList.add('header__menu_visible');
  document.querySelector('.header__menu-main')
    .classList.add('header__menu_visible');
  document.querySelector('.header__button_authorize')
    .classList.add('header__menu_visible');
});

headerClose320.addEventListener('click', () => {
  console.log(headerClose320);
  // document.querySelector('.header').style.backgroundImage = './images/search-320.png';
  document.querySelector('.header').classList.toggle('header_black-background');
  document.querySelector('.header__menu-main').classList.remove('header__menu_visible');
  document.querySelector('.header__button_authorize')
    .classList.remove('header__menu_visible');
  headerMenu320.classList.remove('header__menu_invisible');
  headerClose320.classList.remove('header__menu_visible');
});

// Открытие popup Регистрация
popupLinkRegistration.addEventListener('click', () => {
  popupAuthorize.close();
  popupRegistration.open();
});

// Открытие popup Вход
headerButtonAuthorize.addEventListener('click', () => {
  popupAuthorize.open();
});

popupLinkAuthorize.addEventListener('click', () => {
  popupRegistration.close();
  popupAuthorize.open();
});

popupLinkLogInAfterSuccessReg.addEventListener('click', () => {
  popupSuccessRegistration.close();
  popupAuthorize.open();
});

// Найти новости
let articles = [];
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  resultsSearching.classList.add('results_is-opened');
  articlesList.textContent = '';
  newsApi
    .getArticles(searchForm.word.value, date7daysAgo, dateToday)
    .then((res) => {
      // Удалить прелоудер и Ничего не найдено
      resultsSearching.classList.remove('results_is-opened');
      resultsNothing.classList.remove('results_is-opened');
      // Если ничего не нашлось, то отобразить Ничего не найдено
      if (res.articles.length === 0) {
        return resultsNothing.classList.add('results_is-opened');
      }
      // показать секцию Результаты поиска
      resultsGot.classList.add('results_is-opened');
      // отобразить первые 3 элемента
      cardList.renderMainPage(res.articles.slice(0, 3), searchForm.word.value);
      // удалить выведенные элементы:
      res.articles.splice(0, 3);
      // если есть еще статьи, то отобразить кнопку
      if (res.articles.length > 0) {
        resultsButton.classList.add('results__button_is-visible');
      }
      // сохраняю оставшийся массив в переменной
      return articles = res.articles.slice(0);
    })
    .catch((err) => {
      alert(err.message);
    });
});

// слушаем... Кнопка Показать еще
resultsButton.addEventListener('click', () => {
  let threeArticles = '';
  // отрисовать массив из следующих 3х статей
  threeArticles = articles.slice(0, 3);
  cardList.renderMainPage(threeArticles, searchForm.word.value);
  if (articles.length <= 3) {
    resultsButton.classList.remove('results__button_is-visible');
    return;
  }
  // отрезаем, что отрисовали и возвращаем обновленный массив
  return articles.splice(0, 3);
});

// Регистрация
popupFormRegistration.addEventListener('submit', (event) => {
  event.preventDefault();
  mainApi
    .signUp(
      popupFormRegistration.email.value,
      popupFormRegistration.password.value,
      popupFormRegistration.name.value,
    )
    .then((res) => {
      if (res.message) {
        return Promise.reject(res);
      }
      popupFormRegistration.reset();
      popupRegistration.close();
      popupSuccessRegistration.open();
    })
    .catch((err) => {
      popupFormRegistration.querySelector('.popup__error').textContent = err.message;
    });
});

// Вход
popupFormAuthorize.addEventListener('submit', (event) => {
  event.preventDefault();
  mainApi
    .signIn(
      popupFormAuthorize.email.value,
      popupFormAuthorize.password.value,
    )
    .then((res) => {
      console.log(res);
      if (res.message) {
        return Promise.reject(res);
      }
      PROPS.isLoggedIn = true;
      popupFormAuthorize.reset();
      popupAuthorize.close();
      headerRender(res.data, PROPS.isLoggedIn);
    })
    .catch((err) => {
      popupFormAuthorize.querySelector('.popup__error').textContent = err.message;
      console.log(err);
    });
});

// logout
headerButtonName.addEventListener('click', () => {
  mainApi
    .logout()
    .then((res) => {
      PROPS.isLoggedIn = false;
      headerRenderLogout();
    })
    .catch((err) => {
      alert(err.message);
    });
});

// Сохранение статьи
articlesList.addEventListener('click', (event) => {
  // Если клик по бесцветному флажку:
  if (event.target.classList.contains('article-card__like-icon')) {
    const articleData = article.getTextContentArticle(event);
    mainApi
      .postArticle(articleData)
      .then((data) => {
        article.like(event);
      })
      .catch((err) => {
        alert(err.message);
      });
    // Если клик по синему флажку:
  } else if (event.target.classList.contains('article-card__delete-icon')) {
    const articleId = event.target.closest('.article-card').getAttribute('id');
    mainApi
      .deleteArticle(`${articleId}`)
      .then((data) => {
        console.log(data.message);
      })
      .catch((err) => {
        console.log(`Удаление неуспешно: ${err}`);
        alert(err.message);
      });
    article.like(event);
  }
});

// Всплывающая подсказка Войдите, чтобы сохранять статьи
articlesList.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('article-card__like-icon') && !PROPS.isLoggedIn) {
    event.target.closest('.article-card')
      .querySelector('.article-card__hint-container')
      .classList
      .add('article-card__hint-container_is-opened');
  }
});

// Убрать Всплывающую подсказку Войдите, чтобы сохранять статьи
articlesList.addEventListener('mouseout', (event) => {
  if (event.target.classList.contains('article-card__like-icon') && !PROPS.isLoggedIn) {
    event.target.closest('.article-card')
      .querySelector('.article-card__hint-container')
      .classList
      .remove('article-card__hint-container_is-opened');
  }
});
// функция для проверки авторизованности юзера
function checkLogged() {
  mainApi.getUserInfo()
    .then((res) => {
      if (res.message) {
        return Promise.reject(res);
      }
      PROPS.isLoggedIn = true;
      headerRender(res.name, PROPS.isLoggedIn);
    })
    .catch((err) => {
      console.log(err.message);
      // alert(err.message);
    });
}