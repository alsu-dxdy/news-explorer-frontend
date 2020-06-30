/* eslint-disable no-undef */
import CardSave from '../js/components/CardSave';
import CardList from '../js/components/Cardlist';
import MainApi from '../js/api/MainApi';

import '../css/articles.css';

console.log(456);

const articlesList = document.querySelector('.articles-list');
const savedArticle = new CardSave();
const cardList1 = new CardList(articlesList, savedArticle);

const mainApi1 = new MainApi({
  baseUrl: 'https://api.iseeknews.space',
  // baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

window.addEventListener('load', () => {
  mainApi1.getArticles()
    .then((res) => {
      console.log(res.articles);
      // показать секцию Результаты поиска
      document.querySelector('.results')
        .classList.add('results_is-opened');

      cardList1.render(res.articles);
    });
});
// Удаление карточки
articlesList.addEventListener('click', (event) => {
  if (
    event.target.classList.contains('article-card__delete-icon')
    // && event.target.closest('.place-card').getAttribute('ownerID') === myID
  ) {
    const articleId = event.target.closest('.article-card').getAttribute('id');
    mainApi1
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