import {
  PROPS, mainApi,
} from '../constants/constants';

const {
  headerRender,
} = require('./headerRender');

// функция для проверки авторизованности юзера
export function checkLogged() {
  mainApi.getUserInfo()
    .then((res) => {
      if (res.message) {
        return Promise.reject(res);
      }
      PROPS.isLoggedIn = true;
      headerRender(res.name, PROPS.isLoggedIn);
    })
    .catch((err) => {
      console.log(err.message);
      // alert(err.message);
    });
}