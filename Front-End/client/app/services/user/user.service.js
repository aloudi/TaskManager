export default class UserSrv {
  constructor($http, $log, API_URL) {
    this.http = $http;
    this.logger = $log;
    this.API_URL = API_URL;
  }

  getUser() {
    return this.http.get(`${this.API_URL}/users`)
      .then(
        response => response.data,
        err => this.logger.log(err),
      );
  }

  updateTasks() {
    return this.http.get(`${this.API_URL}/users/tasks`)
      .then(
        response => response.data,
        err => this.logger.log(err),
      );
  }
}

