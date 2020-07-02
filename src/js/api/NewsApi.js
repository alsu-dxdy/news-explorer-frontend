/* eslint-disable no-undef */
export default class NewsApi {
  constructor(options) {
    this.options = options;
  }

  getInitialCards(text) {
    return (
      fetch(`${this.options.baseUrl}q=${text}`, {
        method: 'GET',
        // headers: {
        //   authorization: this.options.headers.authorization,
        // },
      })
    )
      .then((res) => res.json());
  }
}
