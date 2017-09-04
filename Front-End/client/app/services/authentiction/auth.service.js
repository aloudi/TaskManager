export default class AuthService {
  constructor($http, $log, $q, API_URL, jwtSrv) {
    this.http = $http;
    this.logger = $log;
    this.q = $q;
    this.API_URL = API_URL;
    this.jwtSrv = jwtSrv;
  }

  authenticate(type, data) {
    let route;
    const defer = this.q.defer();

    switch (type) {
      case 'login' :
        route = 'login';
        break;
      case 'signUp':
        route = 'users';
        break;
      default:
        route = 'login';
    }

    this.http.post(`${this.API_URL}/${route}`, data)
      .then(
        (response) => {
          this.jwtSrv.save(response.data);
          defer.resolve(response);
        },
        (err) => {
          this.logger.log(`Error ${err.data}`);
          defer.reject(err);
        },
      );

    return defer.promise;
  }

  isSignedIn() {
    return !!this.jwtSrv.get();
  }

  logOut() {
    this.jwtSrv.destroy();
  }
}
