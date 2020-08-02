/* eslint-disable no-undef */
export default class NewsApi {
  constructor(options) {
    this.options = options;
  }

  getArticles(text, startdate, todate) {
    return (
      fetch(`${this.options.baseUrl}q=${text}&from=${startdate}&to=${todate}`, {
        method: 'GET',
      })
    )
      .then((res) => res.json());
  }
}
