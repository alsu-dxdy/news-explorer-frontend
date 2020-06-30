/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
export default class CardList {
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

  // renderSaveArticles(array) {
  //   for (const element of array) {
  //     const newCard = this.card.create(
  //       element.date,
  //       element.image,
  //       element.key,
  //       element.link,
  //       element.source,
  //       element.text,
  //       element.title,
  //       element._id,
  //     );
  //   this.container.appendChild(newCard);
  // }
  // }
}
