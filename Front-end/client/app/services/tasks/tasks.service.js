export default class TasksSrv {
  constructor($http, $log, $q, API_URL) {
    this.http = $http;
    this.logger = $log;
    this.q = $q;
    this.API_URL = API_URL;
  }

  addTask(data) {
    const defer = this.q.defer();

    this.http.post(`${this.API_URL}/users/tasks/`, data)
      .then(
        response => defer.resolve(response),
        err => defer.reject(err),
      );

    return defer.promise;
  }

  editTask(data) {
    const defer = this.q.defer();

    this.http.put(`${this.API_URL}/users/tasks/`, data)
      .then(
        response => defer.resolve(response),
        err => defer.reject(err),
      );

    return defer.promise;
  }

  deleteTask(data) {
    const defer = this.q.defer();

    this.http.delete(`${this.API_URL}/users/tasks/`, { params: data })
      .then(
        response => defer.resolve(response),
        err => defer.reject(err),
      );

    return defer.promise;
  }
}

