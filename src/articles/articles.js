/* eslint-disable no-undef */
import CardSave from '../js/components/CardSave';
import CardList from '../js/components/Cardlist';
import { PROPS, mainApi } from '../js/constants/constants';

import '../css/articles.css';

console.log(456);
const headerButtonName = document.querySelector('.header__button_name');

const articlesList = document.querySelector('.articles-list');
const savedArticle = new CardSave();
const savedArticlesList = new CardList(articlesList, savedArticle);


window.addEventListener('load', () => {
  Promise.all([mainApi.getArticles(), mainApi.getUserInfo()])
    .then(
      ([articles, userData]) => {
        // показать кнопку с именем
        headerButtonName.textContent = userData.name;
        // имя, у вас 5 сохранённых статей
        document.querySelector('.account-info__title').textContent = `${userData.name}, у вас ${articles.articles.length} сохранённых статей`;
        // показать секцию Результаты поиска
        document.querySelector('.results')
          .classList.add('results_is-opened');
        savedArticlesList.render(articles.articles);
      },
    );
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
    })
    .catch((err) => {
      console.log(err);
    });
});
