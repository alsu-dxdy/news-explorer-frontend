/* eslint-disable no-undef */
export function headerRender(name, isLogged) {
  if (isLogged) {
    // показать кнопку Сохраненные статьи
    document.querySelector('.header__menu-articles')
      .classList.add('header__menu-articles_is-opened');
    // показать кнопку с именем
    document.querySelector('.header__button_name')
      .classList.add('header__button_name_is-opened');
    document.querySelector('.header__button_name').textContent = name;

    // скрыть копку Авторизоваться
    document.querySelector('.header__button_authorize')
      .classList.add('header__button_hidden');
  }
}

export function headerRenderLogout() {
  // скрыть кнопку Сохраненные статьи
  document.querySelector('.header__menu-articles')
    .classList.remove('header__menu-articles_is-opened');
  // скрыть кнопку с именем
  document.querySelector('.header__button_name')
    .classList.remove('header__button_name_is-opened');
  // показать копку Авторизоваться
  document.querySelector('.header__button_authorize')
    .classList.remove('header__button_hidden');
}

export function renderAccountButton(name) {
  // засетить имя в кнопку
  document.querySelector('.header__button_name').textContent = name;
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
