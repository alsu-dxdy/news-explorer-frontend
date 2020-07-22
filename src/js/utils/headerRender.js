/* eslint-disable no-undef */
import {
  headerButtonAuthorize, headerMenuArticles, headerButtonLogout,
} from '../constants/constants';

export function headerRender(name, isLogged) {
  if (isLogged) {
    // показать кнопку Сохраненные статьи
    headerMenuArticles.classList.add('header__menu-articles_is-opened');
    // показать кнопку с именем
    headerButtonLogout.classList.add('header__user-name_is-opened');
    headerButtonLogout.textContent = name;

    // скрыть копку Авторизоваться
    headerButtonAuthorize.classList.add('header__button_hidden');
    // скрыть на разрешении 320
    headerButtonAuthorize.classList.remove('header__menu_visible');
  }
}

export function headerRenderLogout() {
  // скрыть кнопку Сохраненные статьи
  headerMenuArticles.classList.remove('header__menu-articles_is-opened');
  // скрыть кнопку с именем
  headerButtonLogout.classList.remove('header__user-name_is-opened');
  // показать копку Авторизоваться
  headerButtonAuthorize.classList.remove('header__button_hidden');
  // показать на разрешении 320
  headerButtonAuthorize.classList.add('header__menu_visible');
}

export function renderAccountButton(name) {
  // показать кнопку с именем
  headerButtonLogout.classList.add('header__user-name_is-opened');
  // засетить имя в кнопку
  headerButtonLogout.textContent = name;
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
