/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
export default class ArticleList {
  constructor(container, card, button) {
    this.container = container;
    this.article = card;
    this.button = button;
  }

  addCard(cardElement) {
    this.container.appendChild(cardElement);
  }

  render(array) {
    for (let i = 0; i < array.length; i++) {
      const newCard = this.article.create(
        array[i],
      );

      this.container.appendChild(newCard);
    }
  }
  // отрисовка статей для залогиненного юзера
  renderMainPage(newsApiArticles, keyword, likedArticles) {
    for (let i = 0; i < newsApiArticles.length; i++) {
      const newCard = this.article.create(
        newsApiArticles[i], keyword,
      );

      // if likedArticles > 0, значит есть Сохр-ные статьи =>
      // для уже Сохр-ных статей закрашивать флажок
      if (likedArticles.length > 0) {
        let isMyLike = false;
        let newsApiArticle = newsApiArticles[i];

        // проверяю наличие своего лайка:
        // прохожу по массиву сохр-ных статей
        for (let i = 0; i < likedArticles.length; i++) {
          // у каждой сохр-ной статьи сравниваю ссылку со ссылкой "статьи, пришедшей с newsapi"
          isMyLike = likedArticles.some(function (savedArticle) {
            return savedArticle.link === newsApiArticle.url;
          });
        }
        // Если есть мой лайк, то закрасить флажок
        if (isMyLike) {
          newCard
            .querySelector('.article-card__like-icon')
            .classList.toggle('article-card__like-icon_liked');
        }
      }

      this.container.appendChild(newCard);
    }
  }

  // возможно Лишний метод Удалить
  // отрисовка статей для НЕзалогиненного юзера
  renderMainPageNotLogged(newsApiArticles, keyword) {
    for (let i = 0; i < newsApiArticles.length; i++) {

      const newCard = this.article.create(
        newsApiArticles[i], keyword,
      );

      this.container.appendChild(newCard);
    }
  }

}
