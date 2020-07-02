/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Article from './js/components/Article';
import ArticleList from './js/components/ArticleList';
import MainApi from './js/api/MainApi';
import NewsApi from './js/api/NewsApi';
import Popup from './js/components/Popup';
import FormValidator from './js/components/FormValidator';

import './css/style.css';

import { PROPS, mainApi, newsApi } from './js/constants/constants';

const { headerRender, headerRenderLogout } = require('./js/utils/headerRender');

const headerButtonAuthorize = document.querySelector('.header__button_authorize');
const headerButtonName = document.querySelector('.header__button_name');

const searchForm = document.querySelector('.search__form');

const popupFormAuthorize = document.querySelector('.popup__form_authorize');
const popupFormRegistration = document.querySelector('.popup__form_registration');
const popupLinkRegistration = document.querySelector('.popup__link_registration'); // ссылка Зарегистрироваться
const popupLinkAuthorize = document.querySelector('.popup__link_authorize'); // ссылка Войти
const popupLinkLogInAfterSuccessReg = document.querySelector('.popup__link_log-in'); // ссылка Выполнить вход
const articlesList = document.querySelector('.articles-list');

/* Экземпляры классов */
const article = new Article();
const cardList = new ArticleList(articlesList, article);
const popupAuthorize = new Popup(document.querySelector('.popup_authorize'));
const popupRegistration = new Popup(document.querySelector('.popup_registration'));
const popupSuccessRegistration = new Popup(document.querySelector('.popup_success-registration'));

/* Экземпляры для валидации (слушатели внутри класса FormValidator) */
const formVAlidAuthorize = new FormValidator(document.querySelector('.popup_authorize'));
const formVAlidRegistration = new FormValidator(document.querySelector('.popup_registration'));


/* -----Слушатели событий----- */
window.addEventListener('load', () => {
  console.log(PROPS);
  console.log(PROPS.isLoggedIn);
  checkLogged();
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
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  newsApi
    .getInitialCards(searchForm.word.value)
    .then((res) => {
      // показать секцию Результаты поиска
      document.querySelector('.results')
        .classList.add('results_is-opened');
      cardList.renderMainPage(res.articles, searchForm.word.value);
    })
    .catch((err) => {
      console.log(33);
      console.log(err);
    });
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
      console.log(55);
      console.log(res);
      if (res.message) {
        console.log(77);
        console.log(res);
        return Promise.reject(res);
      }
      popupFormRegistration.reset();
      popupRegistration.close();
      popupSuccessRegistration.open();
    })
    .catch((err) => {
      console.log(66);
      console.log(err);
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
      console.log(res.data);
      PROPS.isLoggedIn = true;
      console.log(777);
      popupFormAuthorize.reset();
      popupAuthorize.close();
      headerRender(res.data, PROPS.isLoggedIn);
    })
    .catch((err) => {
      console.log(888);
      console.log(err);
    });
});

// logout
headerButtonName.addEventListener('click', () => {
  mainApi
    .logout()
    .then((res) => {
      console.log(res);
      PROPS.isLoggedIn = false;
      headerRenderLogout();
    })
    .catch((err) => {
      console.log(err);
    });
});

// Сохранение статьи
articlesList.addEventListener('click', (event) => {
  // Если клик по бесцветному флажку:
  if (event.target.classList.contains('article-card__like-icon')) {
    // const cardId = event.target.closest('.place-card').getAttribute('cardID');
    mainApi
      .postArticle(
        event.target
          .closest('.article-card')
          .getAttribute('keyword'),
        event.target.closest('.article-card').querySelector('.article-card__title').textContent,
        event.target.closest('.article-card').querySelector('.article-card__text').textContent,
        event.target.closest('.article-card').querySelector('.article-card__date').textContent,
        event.target.closest('.article-card').querySelector('.article-card__source').textContent,
        event.target.closest('.article-card').getAttribute('src'),
        event.target.closest('.article-card').querySelector('.article-card__image').style.backgroundImage.slice(5, -2),
      )
      .then((data) => {
        console.log(data);
        article.like(event);
      })
      .catch((err) => {
        console.log(66);
        console.log(err);
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
      });
    article.like(event);
  }
});

// функция для проверки авторизованности юзера
function checkLogged() {
  mainApi.getUserInfo()
    .then((res) => {
      if (res.message) {
        console.log(1000);
        console.log(res);
        return Promise.reject(res);
      }
      console.log(5000);
      console.log(res);
      PROPS.isLoggedIn = true;
      console.log(PROPS.isLoggedIn);
      headerRender(res.name, PROPS.isLoggedIn);
    })
    .catch((err) => {
      console.log(1001);
      console.log(err.message);
    });
}
