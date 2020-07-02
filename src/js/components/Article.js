/* eslint-disable no-unused-vars */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
export default class Article {
  _changetoRus(newsDate) {
    const a = new Date(newsDate);
    const arr = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
    const articleDate = `${a.getDate()} ${arr[a.getMonth()]}, ${a.getFullYear()}`;
    return articleDate;
  }
  create(item, keyword) {
    const articleCard = document.createElement('div');
    const rusDate = this._changetoRus(item.publishedAt);
    articleCard.classList.add('article-card');
    articleCard.insertAdjacentHTML(
      'beforeend',
      `
      <div class="article-card__image-container">
        <div class="article-card__image">
        <button class="article-card__like-icon"></button>
        </div>

      <div class="article-card__description">
        <p class="article-card__date">${rusDate}</p>
    <h3 class="article-card__title">${item.description}</h3>
    <p class="article-card__text">${item.content}</p>
    <p class="article-card__source">${item.source.name}</p>
      </div >
    </div >
      `,
    );
    articleCard.querySelector('.article-card__image').style.backgroundImage = `url(${item.urlToImage})`;
    articleCard.setAttribute('src', `${item.url}`);
    articleCard.setAttribute('keyword', `${keyword}`);
    return articleCard;
  }

  // addBasketSymbol(element) {
  //   element
  //     .querySelector('.place-card__delete-icon')
  //     .classList.add('place-card__delete-icon_visible');
  // }

  // метод like общий для Сохранение и удаления статьи
  like(e) {
    if (e.target.classList.contains('article-card__like-icon')) {
      // клик по сердечку
      e.target.classList.toggle('article-card__like-icon_liked');
    }
  }
}
