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
// console.log(date7daysAgo);

const { headerRender, headerRenderLogout } = require('./js/utils/headerRender');

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

// Кнопка Показать еще


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
  resultsSearching.classList.add('results_is-opened');
  newsApi
    .getArticles(searchForm.word.value, date7daysAgo, dateToday)
    .then((res) => {
      console.log(`Всего нашлось ${res.articles.length} статей`);
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

      // слушаем...
      resultsButton.addEventListener('click', () => {
        // сформировать массив из следующих 3х статей
        const threeArticles = res.articles.slice(0, 3);
        cardList.renderMainPage(threeArticles);
        if (res.articles.length < 3) {
          resultsButton.classList.remove('results__button_is-visible');
        }
        res.articles.splice(0, 3);
      });
    })
    .catch((err) => {
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
        article.like(event);
      })
      .catch((err) => {
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
        return Promise.reject(res);
      }
      PROPS.isLoggedIn = true;
      headerRender(res.name, PROPS.isLoggedIn);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
