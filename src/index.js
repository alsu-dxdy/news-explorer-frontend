// import MainApi from './js/api/MainApi';
// import NewsApi from "./js/api/NewsApi";
// import FormValidator from "./js/";
import Popup from './js/components/Popup';
import './css/style.css';

const headerButtonAuthorize = document.querySelector('.header__button_authorize');

/* Экземпляры классов */

// const mainApi = new MainApi({
//   baseUrl: 'https://api.iseeknews.space',
//   headers: {
//     authorization: '24efeac8-6c91-4328-9f60-c8c7ed524d9c',
//     'Content-Type': 'application/json',
//   },
// });

// const card = new Card();
// const cardList = new CardList(placesList, card, api);

const popupAuthorize = new Popup(document.querySelector('.popup_authorize')); //

// Открытие popup Вход
headerButtonAuthorize.addEventListener('click', () => {
  popupAuthorize.open();
  console.log(123);
});
