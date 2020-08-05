export default class FormValidatorByForm {
  // этот класс принимает в конст-ре форму, а не попап
  constructor(form) {
    this.form = form;
    this.button = this.form.querySelector('button');
    this.form.addEventListener('input', this.setEventListeners.bind(this));
  }

  // checkInputValidity —  валидация поля.вернет значение true, если проблем не обнаружит
  checkInputValidity(input, error) {

    if (input.validity.valueMissing) {
      return (error.textContent = 'Нужно ввести ключевое слово');
    }

    if (input.validity.tooShort) {
      return (error.textContent = 'Должно быть от 2 до 30 символов');
    }

    if (input.validity.tooLong) {
      return (error.textContent = 'Должно быть от 2 до 30 символов');
    }

    error.textContent = '';
  }

  // setSubmitButtonState - метод, меняющий состояние кнопки сабмита.
  setSubmitButtonState(form, button) {
    if (form.checkValidity()) {
      button.removeAttribute('disabled');
      button.classList.remove('button_disabled');
      return;
    }
    if (!form.checkValidity()) {
      button.setAttribute('disabled', true);
      button.classList.add('button_disabled');
      return;
    }
  }

  setEventListeners(event) {
    this.checkInputValidity(
      event.target,
      event.target.closest('div').querySelector('.input__error'),
    );
    this.setSubmitButtonState(this.form, this.button);
  }

  setError(err) {
    this.form.querySelector('.input__error').textContent = err;
  }
}
