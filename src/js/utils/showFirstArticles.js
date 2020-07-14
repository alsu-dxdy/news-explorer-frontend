/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import {
  resultsSearching, resultsNothing, resultsGot, resultsButton,
  cardList,
} from '../constants/constants';

// export let articles = []; // принимает остаток массива новостей

export function showFirstArticles(allArticles, keyword) {
  // показать секцию Результаты поиска
  resultsGot.classList.add('results_is-opened');
  // отобразить первые 3 элемента
  cardList.renderMainPage(allArticles.slice(0, 3), keyword);
  // удалить выведенные элементы:
  allArticles.splice(0, 3);
  // если есть еще статьи, то отобразить кнопку
  if (allArticles.length > 0) {
    resultsButton.classList.add('results__button_is-visible');
  }
  // сохраняю оставшийся массив в переменную
  console.log(allArticles.slice(0));
  return allArticles.slice(0);
}
export function showResultsNothing(allArticles) {
  // Удалить прелоудер и Ничего не найдено
  resultsSearching.classList.remove('results_is-opened');
  resultsNothing.classList.remove('results_is-opened');
  // Если ничего не нашлось, то отобразить Ничего не найдено
  if (allArticles.length === 0) {
    return resultsNothing.classList.add('results_is-opened');
  }
}
