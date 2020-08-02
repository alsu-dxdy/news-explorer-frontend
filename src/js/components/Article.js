/* eslint-disable consistent-return */
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

  getTextContentArticle(event) {
    // Если клик по бесцветному флажку:
    if (event.target.classList.contains('article-card__like-icon')) {
      const article = event.target.closest('.article-card');
      return {
        keyword: article.getAttribute('keyword'),
        title: article.querySelector('.article-card__title').textContent,
        text: article.querySelector('.article-card__text').textContent,
        date: article.querySelector('.article-card__date').textContent,
        source: article.querySelector('.article-card__source').textContent,
        link: article.getAttribute('src'),
        image: article.querySelector('.article-card__image').style.backgroundImage.slice(5, -2),
      };
    }
  }
  create(item, keyword) {
    const rusDate = this._changetoRus(item.publishedAt);
    const articleCard = document.createElement('div');
    articleCard.classList.add('article-card');

    articleCard.insertAdjacentHTML(
      'beforeend',
      `
      <a href="#" class="article-card__link"></a>
        <div class="article-card__image-container">
          <div class="article-card__image">
            <div class="article-card__hint-container">
              <p class="article-card__hint-text">Войдите, чтобы сохранять статьи</p>
            </div>
            <button class="article-card__like-icon"></button>
          </div>
        <div class="article-card__description">
          <p class="article-card__date"></p>
      <h3 class="article-card__title"></h3>
      <p class="article-card__text"></p>
      <p class="article-card__source"></p>
        </div >
      </div >

        `,
    );
    // textContent-ы
    articleCard.querySelector('.article-card__date').textContent = `${rusDate}`;
    articleCard.querySelector('.article-card__title').textContent = `${item.title}`;
    articleCard.querySelector('.article-card__text').textContent = `${item.description}`;
    articleCard.querySelector('.article-card__source').textContent = `${item.source.name}`;

    articleCard.querySelector('.article-card__image').style.backgroundImage = `url(${item.urlToImage})`;
    articleCard.querySelector('a').href = item.url;

    articleCard.setAttribute('src', `${item.url}`);
    articleCard.setAttribute('keyword', `${keyword}`);
    return articleCard;
  }


  // метод like общий для Сохранение и удаления статьи
  like(e) {
    if (e.target.classList.contains('article-card__like-icon')) {
      // клик по сердечку
      e.target.classList.toggle('article-card__like-icon_liked');
    }
  }
}
