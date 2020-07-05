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
    const rusDate = this._changetoRus(item.publishedAt);
    const articleCard = document.createElement('div');
    articleCard.classList.add('article-card');
    // imageElement
    const imageElement = document.createElement('div');
    const hintContainerElement = document.createElement('div');
    const hintTextElement = document.createElement('p');
    const likeButtonElement = document.createElement('button');

    hintContainerElement.appendChild(hintTextElement);
    imageElement.appendChild(hintContainerElement);
    imageElement.appendChild(likeButtonElement);

    // descriptionElement
    const descriptionElement = document.createElement('div');
    const dateElement = document.createElement('p');
    const titleElement = document.createElement('p');
    const textElement = document.createElement('p');
    const sourceElement = document.createElement('p');

    descriptionElement.appendChild(dateElement);
    descriptionElement.appendChild(titleElement);
    descriptionElement.appendChild(textElement);
    descriptionElement.appendChild(sourceElement);

    // соединение 2х частей в целую карточку
    articleCard.appendChild(imageElement);
    articleCard.appendChild(descriptionElement);

    // классы
    imageElement.classList.add('article-card__image');
    hintContainerElement.classList.add('article-card__hint-container');
    hintTextElement.classList.add('article-card__hint-text');
    likeButtonElement.classList.add('article-card__like-icon');

    descriptionElement.classList.add('article-card__description');
    dateElement.classList.add('article-card__date');
    titleElement.classList.add('article-card__title');
    textElement.classList.add('article-card__text');
    sourceElement.classList.add('article-card__source');

    // textContent-ы
    dateElement.textContent = `${rusDate}`;
    titleElement.textContent = `${item.description}`;
    textElement.textContent = `${item.content}`;
    sourceElement.textContent = `${item.source.name}`;
    hintContainerElement.textContent = 'Войдите, чтобы сохранять статьи';

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
