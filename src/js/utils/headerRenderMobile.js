import {
  PROPS, header, headerLogo, headerMenuContainer320,
  headerMenu320, headerClose320,
  headerMenuMain, headerButtonAuthorize,
  headerButtonLogout, headerUserName, headerImgLogout,
} from '../constants/constants';

export function headerRenderMobileOpen() {
  header.classList.toggle('header_black-background');
  // headerMenuContainer320 чтобы не отображались за пределеами меню Сохр статьи и Кнопка с именем
  headerMenuContainer320.classList.add('header__menu_visible');
  headerMenu320.classList.add('header__menu_invisible');
  headerClose320.classList.add('header__menu_visible');

  headerMenuMain.classList.add('header__menu_visible');
  if (!PROPS.isLoggedIn) {
    headerButtonAuthorize.classList.add('header__menu_visible');
  }
}

export function headerRenderMobileClose() {
  header.classList.toggle('header_black-background');
  // headerMenuContainer320 чтобы не отображались за пределеами меню Сохр статьи и Кнопка с именем
  headerMenuContainer320.classList.remove('header__menu_visible');

  headerMenuMain.classList.remove('header__menu_visible');
  headerButtonAuthorize.classList.remove('header__menu_visible');

  headerMenu320.classList.remove('header__menu_invisible');
  headerClose320.classList.remove('header__menu_visible');
}
// функции для articles.html
export function headerRenderMobileOpenAccount() {
  header.classList.toggle('header_black-background');
  headerLogo.classList.toggle('header_font-black');
  // headerMenuContainer320 чтобы не отображались за пределами меню Сохр статьи и Кнопка с именем
  headerMenuContainer320.classList.add('header__menu_visible');

  headerMenu320.classList.add('header__menu_invisible');
  headerClose320.classList.add('header__menu_visible');

  headerMenuMain.classList.add('header__menu_visible');
  headerMenuMain.classList.toggle('header_font-black');

  headerButtonLogout.classList.toggle('header__button_black');
  headerUserName.classList.toggle('header_font-black');
  headerImgLogout.src = '../images/exit1440white.svg';
}

export function headerRenderMobileCloseAccount() {
  header.classList.toggle('header_black-background');
  headerLogo.classList.toggle('header_font-black');
  // headerMenuContainer320 чтобы не отображались за пределами меню Сохр статьи и Кнопка с именем
  headerMenuContainer320.classList.remove('header__menu_visible');

  headerMenu320.classList.remove('header__menu_invisible');
  headerClose320.classList.remove('header__menu_visible');

  headerMenuMain.classList.remove('header__menu_visible');
  headerMenuMain.classList.toggle('header_font-black');

  headerButtonLogout.classList.toggle('header__button_black');
  headerUserName.classList.toggle('header_font-black');
  headerImgLogout.src = '../images/exit1440black.svg';
}
