/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import {
  resultsSearching, resultsNothing, resultsServerError,
  resultsGot, resultsButton, cardList,
} from '../constants/constants';

// export let articles = []; // принимает остаток массива новостей

export function showFirstArticles(newsApiArticles, keyword, savedArticles) {
  // показать секцию Результаты поиска
  resultsGot.classList.add('results_is-opened');
  // отобразить первые 3 элемента
  cardList.renderMainPage(newsApiArticles.slice(0, 3), keyword, savedArticles);
  // удалить выведенные элементы:
  newsApiArticles.splice(0, 3);
  // если есть еще статьи, то отобразить кнопку
  if (newsApiArticles.length > 0) {
    resultsButton.classList.add('results__button_is-visible');
  }
  // сохраняю оставшийся массив в переменную
  // console.log(newsApiArticles.slice(0));
  return newsApiArticles.slice(0);
}

export function removePastResults() {
  // Удалить прелоудер, 500ю ошибку, предыдущие результаты, Ничего не най
  resultsSearching.classList.remove('results_is-opened');
  resultsServerError.classList.remove('results_is-opened');
  resultsGot.classList.remove('results_is-opened');
  resultsNothing.classList.remove('results_is-opened');
}

export function showMessageServerError() {
  resultsServerError
    .classList.add('results_is-opened');
}
