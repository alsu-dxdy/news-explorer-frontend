/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
export default class ArticleList {
  constructor(container, card) {
    this.container = container;
    this.card = card;
  }

  addCard(cardElement) {
    this.container.appendChild(cardElement);
  }

  render(array) {
    for (let i = 0; i < array.length; i++) {
      const newCard = this.card.create(
        array[i],
      );

      this.container.appendChild(newCard);
    }
  }

  renderMainPage(array, keyword) {
    for (let i = 0; i < array.length; i++) {
      const newCard = this.card.create(
        array[i], keyword,
      );
      this.container.appendChild(newCard);
    }
  }

  // renderMainPage(newsArticles, savedArticles) {
  //   for (let i = 0; i < newsArticles.length; i++) {
  //     const newCard = this.card.create(
  //       newsArticles[i],
  //     );
  //     this.container.appendChild(newCard);
  //   }
  // проверяю наличие своего лайка
  // const isMyLike = newsArticles[i].url.some(function (user) {
  //   return user._id === userID;
  // });
  // }
}
