/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
export default class Card {
  // create(urlValue, urlToImageValue, publishedAtValue, titleValue,
  //   contentValue, sourceNameValue) {
  create(item) {
    const articleCard = document.createElement('div');
    articleCard.classList.add('article-card');
    articleCard.insertAdjacentHTML(
      'beforeend',
      `
      <div class="article-card__image-container">
        <div class="article-card__image">
        <button class="article-card__like-icon"></button>
        </div>

      <div class="article-card__description">
        <p class="article-card__date">${item.publishedAt}</p>
        <h3 class="article-card__title">${item.description}</h3>
        <p class="article-card__text">${item.content}</p>
        <p class="article-card__source">${item.source.name}</p>
      </div>
    </div>
      `,
    );
    articleCard.querySelector('.article-card__image').style.backgroundImage = `url(${item.urlToImage})`;
    articleCard.setAttribute('src', `${item.urlToImage}`);
    return articleCard;
  }

  // addBasketSymbol(element) {
  //   element
  //     .querySelector('.place-card__delete-icon')
  //     .classList.add('place-card__delete-icon_visible');
  // }

  // метод like общий для Постановки и снятия лайка
  like(e) {
    if (e.target.classList.contains('article-card__like-icon')) {
      // клик по сердечку
      e.target.classList.toggle('article-card__like-icon_liked');
    }
  }
}
