import {
  searchInput, searchButton,
} from '../constants/constants';

// Залочить инпут и кнопку поиска
export function lockForm() {
  searchInput.setAttribute('disabled', true);
  searchButton.setAttribute('disabled', true);
  searchButton.classList.add('button_disabled');
}

// Разлочить инпут и кнопку поиска
export function unLockForm() {
  searchInput.removeAttribute('disabled');
  searchButton.removeAttribute('disabled');
  searchButton.classList.remove('button_disabled');
}
