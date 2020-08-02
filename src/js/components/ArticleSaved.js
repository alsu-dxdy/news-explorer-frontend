/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
import Article from './Article';

export default class ArticleSaved extends Article {
  create(item) {
    const articleCard = document.createElement('div');
    articleCard.classList.add('article-card');
    articleCard.insertAdjacentHTML(
      'beforeend',
      `
      <a href="#" class="article-card__link"></a>
      <div class="article-card__image">
        <div class="article-card__left-container">
          <p class="article-card__keyword">${item.keyword}</p>
        </div>
      <button class="article-card__delete-icon"></button>
      </div>

    <div class="article-card__description">
      <p class="article-card__date"></p>
      <h3 class="article-card__title"></h3>
      <p class="article-card__text"></p>
      <p class="article-card__source"></p>
    </div>
      `,
    );
    // textContent-ы
    articleCard.querySelector('.article-card__date').textContent = item.data;
    articleCard.querySelector('.article-card__title').textContent = item.title;
    articleCard.querySelector('.article-card__text').textContent = item.text;
    articleCard.querySelector('.article-card__source').textContent = item.source;

    articleCard.querySelector('.article-card__image').style.backgroundImage = `url(${item.image})`;
    articleCard.querySelector('a').href = item.link;

    articleCard.setAttribute('src', item.link);
    articleCard.setAttribute('id', item._id);
    return articleCard;
  }

  // Удаление карточки
  remove(e) {
    // клик по корзине
    if (e.target.classList.contains('article-card__delete-icon')) {
      e.target.closest('.article-card').remove();
    }
  }
}
