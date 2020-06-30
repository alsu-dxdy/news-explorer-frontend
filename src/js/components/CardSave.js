/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
import Card from './Card';

export default class CardSave extends Card {
  create(item) {
    const articleCard = document.createElement('div');
    articleCard.classList.add('article-card');
    articleCard.insertAdjacentHTML(
      'beforeend',
      `
      <div class="article-card__image">
        <div class="article-card__left-container">
          <p class="article-card__keyword">Природа</p>
        </div>
      <button class="article-card__delete-icon"></button>
      </div>

    <div class="article-card__description">
      <p class="article-card__date">${item.data}</p>
      <h3 class="article-card__title">${item.title}</h3>
      <p class="article-card__text">${item.text}</p>
      <p class="article-card__source">${item.source}</p>
    </div>
      `,
    );
    articleCard.querySelector('.article-card__image').style.backgroundImage = `url(${item.image})`;
    articleCard.setAttribute('src', `${item.link}`);
    articleCard.setAttribute('id', `${item._id}`);
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