/* eslint-disable prefer-const */
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
import FormValidatorByForm from './js/components/FormValidatorByForm';

import './css/style.css';

import {
  PROPS, mainApi, newsApi,
  headerButtonAuthorize, headerButtonLogout,
  headerMenu320, headerClose320,
  searchForm, searchInput, searchButton,
  popupFormAuthorize, popupFormRegistration, popupLinkRegistration,
  popupLinkAuthorize, popupLinkLogInAfterSuccessReg, articlesList,
  resultsSearching, resultsNothing,
  resultsButton, article, cardList,
  dateToday, date7daysAgo,
} from './js/constants/constants';

const { checkLogged } = require('./js/utils/checkLogged');

const {
  headerRender, headerRenderLogout,
} = require('./js/utils/headerRender');

const {
  headerRenderMobileOpen, headerRenderMobileClose,
} = require('./js/utils/headerRenderMobile');

const {
  showFirstArticles, removePastResults, showMessageServerError
} = require('./js/utils/showFirstArticles');

const {
  lockForm, unLockForm
} = require('./js/utils/lockForm');

let articlesMainPage = []; // остаток массива статей после отображения 1-ых 3х статей
let savedArticles = []; // сохр-ые статьи для синего флажка у уже сохр-ых статей

/* Экземпляры классов */
const popupAuthorize = new Popup(document.querySelector('.popup_authorize'));
const popupRegistration = new Popup(document.querySelector('.popup_registration'));
const popupSuccessRegistration = new Popup(document.querySelector('.popup_success-registration'));

/* Экземпляры для валидации (слушатели внутри класса FormValidator) */
const formVAlidAuthorize = new FormValidator(document.querySelector('.popup_authorize'));
const formVAlidRegistration = new FormValidator(document.querySelector('.popup_registration'));
const formValidSearch = new FormValidatorByForm(searchForm);

/* -----Слушатели событий----- */
window.addEventListener('load', () => {
  // функция для проверки авторизованности юзера
  checkLogged();
});

headerMenu320.addEventListener('click', () => {
  headerRenderMobileOpen();
});

headerClose320.addEventListener('click', () => {
  headerRenderMobileClose();
});

// Открытие popup Регистрация
popupLinkRegistration.addEventListener('click', () => {
  popupAuthorize.close();
  popupRegistration.open();
});

// Открытие popup Вход
headerButtonAuthorize.addEventListener('click', () => {
  popupAuthorize.open();
  headerRenderMobileClose();

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
  // Залочить инпут и кнопку поиска
  lockForm();
  savedArticles.length = 0; // очистить массив
  articlesList.textContent = '';
  removePastResults();
  // Прелоудер отобразить
  resultsSearching.classList.add('results_is-opened');
  // Если юзер залогинен
  if (PROPS.isLoggedIn) {
    // запрос Сохраненных статей для залогиненного юзера:
    mainApi.getArticles()
      .then((data) => {
        // сохр-ые статьи для синего флажка у уже сохр-ых статей
        return savedArticles = data.articles;
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  // запрос Статей по запросу к newsApi:
  newsApi
    .getArticles(searchForm.word.value, date7daysAgo, dateToday)
    .then((res) => {
      // Разлочить инпут и кнопку поиска
      unLockForm();
      // Удалить прелоудер
      resultsSearching.classList.remove('results_is-opened');
      // Если ничего не нашлось, то отобразить Ничего не найдено
      if (res.articles.length === 0) {
        return resultsNothing.classList.add('results_is-opened');
      }

      return articlesMainPage = showFirstArticles(res.articles, searchForm.word.value, savedArticles);
    })
    .catch((err) => {
      console.log(searchInput.hasAttribute('disabled'));
      if (
        searchInput.hasAttribute('disabled') && searchButton.hasAttribute('disabled')
      ) {
        // Разлочить инпут и кнопку поиска
        unLockForm();
      }
      removePastResults();
      showMessageServerError();
    });

});

// слушаем... Кнопка Показать еще
resultsButton.addEventListener('click', () => {
  let threeArticles = '';
  // отрисовать массив из следующих 3х статей
  threeArticles = articlesMainPage.slice(0, 3);
  cardList.renderMainPage(threeArticles, searchForm.word.value, savedArticles);
  if (articlesMainPage.length <= 3) {
    resultsButton.classList.remove('results__button_is-visible');
    return;
  }
  // отрезаем, что отрисовали и возвращаем обновленный массив
  return articlesMainPage.splice(0, 3);
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
      if (res.message) {
        return Promise.reject(res);
      }
      PROPS.isLoggedIn = true;
      popupFormAuthorize.reset();
      popupAuthorize.close();
      headerRender(res.data, PROPS.isLoggedIn);
      savedArticles.length = 0; // очистить массив
    })
    .catch((err) => {
      popupFormAuthorize.querySelector('.popup__error').textContent = err.message;
      console.log(err);
    });
});

// logout
headerButtonLogout.addEventListener('click', () => {
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

