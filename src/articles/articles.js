/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import ArticleSaved from '../js/components/ArticleSaved';
import ArticleList from '../js/components/ArticleList';
import {
  PROPS, mainApi, headerButtonName,
  headerMenu320, headerClose320,
} from '../js/constants/constants';


import '../css/articles.css';

const {
  renderAccountButton, renderAccountCount, renderAccountNotArticles,
} = require('../js/utils/headerRender');

const {
  headerRenderMobileOpenAccount, headerRenderMobileCloseAccount,
} = require('../js/utils/headerRenderMobile');

const articlesList = document.querySelector('.articles-list');
const savedArticle = new ArticleSaved();
const savedArticlesList = new ArticleList(articlesList, savedArticle);

window.addEventListener('load', () => {
  Promise.all([mainApi.getArticles(), mainApi.getUserInfo()])
    .then(
      ([articles, userData]) => {
        // редирект для на залогиненного юзера
        if (userData.message) {
          return window.location.href = './';
        }
        // отрисовка хедера
        renderAccountButton(userData.name);
        // если нет сохраненных статей: У вас нет сохраненных статей
        if (articles.message) {
          return renderAccountNotArticles(userData.name);
        }
        if (articles.articles.length > 0) {
          // имя, у вас 5 сохранённых статей
          renderAccountCount(userData.name, articles.articles.length, articles.articles[0].keyword);
          // показать секцию Результаты поиска
          document.querySelector('.results')
            .classList.add('results_is-opened');
          savedArticlesList.render(articles.articles);
        }
        // Если articles.articles.length === 2, то передать 2е слово
      },
    )
    .catch((err) => {
      console.log(err);
    });
});

// Открытие, закрытие меню
headerMenu320.addEventListener('click', () => {
  headerRenderMobileOpenAccount();
});

headerClose320.addEventListener('click', () => {
  headerRenderMobileCloseAccount();
});

// Удаление карточки
articlesList.addEventListener('click', (event) => {
  if (event.target.classList.contains('article-card__delete-icon')) {
    const articleId = event.target.closest('.article-card').getAttribute('id');
    mainApi
      .deleteArticle(`${articleId}`)
      .then((data) => {
        console.log(data.message);
      })
      .catch((err) => {
        console.log(`Удаление неуспешно: ${err}`);
      });

    savedArticle.remove(event);
  }
});

// logout
headerButtonName.addEventListener('click', () => {
  mainApi
    .logout()
    .then((data) => {
      console.log(data);
      PROPS.isLoggedIn = false;
      window.location.href = './';
    })
    .catch((err) => {
      console.log(err);
    });
});
