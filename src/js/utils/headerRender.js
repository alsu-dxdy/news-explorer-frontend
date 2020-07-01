/* eslint-disable no-undef */
module.exports.headerRender = (name, isLogged) => {
  if (isLogged) {
    // показать кнопку Сохраненные статьи
    document.querySelector('.header__menu-articles')
      .classList.add('header__menu-articles_is-opened');
    // показать кнопку с именем
    document.querySelector('.header__button_name').textContent = name;
    document.querySelector('.header__button_name')
      .classList.add('header__button_name_is-opened');
    // скрыть копку Авторизоваться
    document.querySelector('.header__button_authorize')
      .classList.add('header__button_hidden');
  }
};

module.exports.headerRenderLogout = () => {
  // скрыть кнопку Сохраненные статьи
  document.querySelector('.header__menu-articles')
    .classList.remove('header__menu-articles_is-opened');
  // скрыть кнопку с именем
  document.querySelector('.header__button_name')
    .classList.remove('header__button_name_is-opened');
  // показать копку Авторизоваться
  document.querySelector('.header__button_authorize')
    .classList.remove('header__button_hidden');
};
