export default class JWT {
  constructor($window) {
    this.window = $window;
  }

  save(token) {
    this.window.localStorage['JWT'] = token;
  }

  get() {
    return this.window.localStorage['JWT'];
  }

  destroy() {
    this.window.localStorage.removeItem('JWT');
  }
}
