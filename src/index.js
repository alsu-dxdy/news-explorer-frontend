/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Card from './js/components/Card';
import CardList from './js/components/Cardlist';
import MainApi from './js/api/MainApi';
import NewsApi from './js/api/NewsApi';

import Popup from './js/components/Popup';
import FormValidator from './js/components/FormValidator';

import './css/style.css';

const headerButtonAuthorize = document.querySelector('.header__button_authorize');
// const searchButton = document.querySelector('.search__button');
const searchForm = document.querySelector('.search__form');

const popupFormAuthorize = document.querySelector('.popup__form_authorize');
const popupFormRegistration = document.querySelector('.popup__form_registration');
const popupLinkRegistration = document.querySelector('.popup__link_registration'); // ссылка Зарегистрироваться
const popupLinkAuthorize = document.querySelector('.popup__link_authorize'); // ссылка Войти
const popupLinkLogInAfterSuccessReg = document.querySelector('.popup__link_log-in'); // ссылка Выполнить вход
const articlesList = document.querySelector('.articles-list');
let userIslogined = false;

const mainApi = new MainApi({
  baseUrl: 'https://api.iseeknews.space',
  // baseUrl: 'https://api.news-today.site',
  // baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});


/* Экземпляры классов */
const card = new Card();
const cardList = new CardList(articlesList, card);
const popupAuthorize = new Popup(document.querySelector('.popup_authorize'));
const popupRegistration = new Popup(document.querySelector('.popup_registration'));
const popupSuccessRegistration = new Popup(document.querySelector('.popup_success-registration'));


/* Экземпляры для валидации (слушатели внутри класса FormValidator) */
const formVAlidAuthorize = new FormValidator(document.querySelector('.popup_authorize'));
const formVAlidRegistration = new FormValidator(document.querySelector('.popup_registration'));

/* -----Слушатели событий----- */

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

const newsApi = new NewsApi({
  baseUrl: 'https://newsapi.org/v2/everything?pageSize=10&apiKey=a3389c152ac04c848350954b53570e25&',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Найти новости
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  newsApi
    .getInitialCards(searchForm.word.value)
    .then((res) => {
      // if (!res.ok) {
      //   console.log(11);
      //   return Promise.reject();
      // }
      console.log(22);
      console.log(res.articles);
      // показать секцию Результаты поиска
      document.querySelector('.results')
        .classList.add('results_is-opened');
      cardList.render(res.articles);
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
      userIslogined = true;
      console.log(777);
      popupFormAuthorize.reset();
      popupAuthorize.close();
      // показать кнопку Сохраненные статьи
      document.querySelector('.header__menu-articles')
        .classList.add('header__menu-articles_is-opened');
      // показать кнопку с именем
      document.querySelector('.header__button_name').textContent = res.data;
      document.querySelector('.header__button_name')
        .classList.add('header__button_name_is-opened');
      // скрыть копку Авторизоваться
      document.querySelector('.header__button_authorize')
        .classList.add('header__button_hidden');
    })
    .catch((err) => {
      console.log(888);
      console.log(err);
    });
});

// Лайк карточки
articlesList.addEventListener('click', (event) => {
  // Если клик по бесцветному флажку:
  if (event.target.classList.contains('article-card__like-icon')) {
    // const cardId = event.target.closest('.place-card').getAttribute('cardID');
    mainApi
      .postArticle(
        event.target
          .closest('.article-card')
          .querySelector('.article-card__date').textContent,
        event.target.closest('.article-card').querySelector('.article-card__title').textContent,
        event.target.closest('.article-card').querySelector('.article-card__text').textContent,
        event.target.closest('.article-card').querySelector('.article-card__date').textContent,
        event.target.closest('.article-card').querySelector('.article-card__source').textContent,
        event.target.closest('.article-card').getAttribute('src'),
        event.target.closest('.article-card').querySelector('.article-card__image').style.backgroundImage.slice(5, -2),
      )
      // mainApi.isLogined()
      //   .then((res) => {
      //     console.log(55);
      //     console.log(res);
      //   })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(66);
        console.log(err);
      });
  }
});
// api
//   .addLike(`${cardId}`)
//   .then(data => {
//     card.like(event);
//   })
//   .catch(err => {
//     console.log(`Постановка лайка НЕ успешна: ${err}`);
//   });
