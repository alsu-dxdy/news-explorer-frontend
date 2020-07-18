/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import {
  resultsSearching, resultsNothing, resultsGot, resultsButton,
  cardList,
} from '../constants/constants';

// export let articles = []; // принимает остаток массива новостей

export function showFirstArticles(newsApiArticles, keyword, savedArticles) {
  // показать секцию Результаты поиска
  resultsGot.classList.add('results_is-opened');
  // отобразить первые 3 элемента
  // Если savedArticles === undefined - значит запрос на Сохр-ные статьи не делали, т е юзер не залогинен
  if (savedArticles === undefined) {
    // просто отрисовать статьи из newsApi
    cardList.renderMainPage(newsApiArticles.slice(0, 3), keyword);
  } else {
    // отрисовать статьи из newsApi, предварительно проверяяя Синий флажок
    cardList.renderMainPage(newsApiArticles.slice(0, 3), keyword, savedArticles);
  }
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

export function showResultsNothing(newsApiArticles) {
  // Удалить прелоудер и Ничего не найдено
  resultsSearching.classList.remove('results_is-opened');
  resultsNothing.classList.remove('results_is-opened');
  // Если ничего не нашлось, то отобразить Ничего не найдено
  if (newsApiArticles.length === 0) {
    return resultsNothing.classList.add('results_is-opened');
  }
}
