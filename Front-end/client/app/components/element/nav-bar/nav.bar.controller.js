export default class NavBarController {
  constructor($http, $state, $log, authSrv) {
    this.http = $http;
    this.state = $state;
    this.logger = $log;
    this.authSrv = authSrv;
  }

  logOut() {
    this.authSrv.logOut();
    this.state.go('login');
  }
}

