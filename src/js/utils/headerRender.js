/* eslint-disable no-undef */
import {
  headerButtonAuthorize, headerMenuArticles, headerButtonName,
} from '../constants/constants';

export function headerRender(name, isLogged) {
  if (isLogged) {
    // показать кнопку Сохраненные статьи
    headerMenuArticles.classList.add('header__menu-articles_is-opened');
    // показать кнопку с именем
    headerButtonName.classList.add('header__button_name_is-opened');
    headerButtonName.textContent = name;

    // скрыть копку Авторизоваться
    headerButtonAuthorize.classList.add('header__button_hidden');
  }
}

export function headerRenderLogout() {
  // скрыть кнопку Сохраненные статьи
  headerMenuArticles.classList.remove('header__menu-articles_is-opened');
  // скрыть кнопку с именем
  headerButtonName.classList.remove('header__button_name_is-opened');
  // показать копку Авторизоваться
  headerButtonAuthorize.classList.remove('header__button_hidden');
}

export function renderAccountButton(name) {
  // засетить имя в кнопку
  headerButtonName.textContent = name;
}

export function renderAccountCount(name, count, word) {
  // имя, у вас 5 сохранённых статей
  document.querySelector('.account-info__title').textContent = `${name}, у вас ${count} сохранённых статей`;
  document.querySelector('.account-info__keywords_bold').textContent = `${word}`;
}

export function renderAccountNotArticles(name) {
  // у вас нет сохранённых статей
  document.querySelector('.account-info__title').textContent = `${name}, у вас нет сохранённых статей`;
}
