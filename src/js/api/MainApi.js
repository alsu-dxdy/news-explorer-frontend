/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
export default class MainApi {
  constructor(options) {
    this.options = options;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.resolve(res.json());
    }
    return res.json();
  }

  getArticles() {
    return fetch(`${this.options.baseUrl}/articles`, {
      method: 'GET',
      headers: {
        authorization: this.options.headers.authorization,
      },
      credentials: 'include',
    })
      .then((res) => this._getResponseData(res));
  }

  postArticle(keyword, title, text, date, source, link, image) {
    return fetch(`${this.options.baseUrl}/articles`, {
      method: 'POST',
      headers: {
        authorization: this.options.headers.authorization,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    })
      .then((res) => this._getResponseData(res));
  }

  deleteArticle(articleId) {
    return fetch(`${this.options.baseUrl}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        authorization: this.options.headers.authorization,
      },
      credentials: 'include',
    }).then((res) => this._getResponseData(res));
  }

  signUp(email, password, name) {
    return fetch(`${this.options.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        authorization: this.options.headers.authorization,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
      .then((res) => this._getResponseData(res));
  }

  signIn(email, password) {
    return fetch(`${this.options.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        authorization: this.options.headers.authorization,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => this._getResponseData(res));
  }

  logout() {
    return fetch(`${this.options.baseUrl}/logout`, {
      method: 'DELETE',
      headers: {
        authorization: this.options.headers.authorization,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.resolve(res);
        }
        return res;
      });
  }

  getUserInfo() {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        authorization: this.options.headers.authorization,
      },
    })
      .then((res) => this._getResponseData(res));
    // .then((res) => res.json());
  }
}
