export default class NavBarController {
  constructor($state, $log, authSrv) {
    this.state = $state;
    this.logger = $log;
    this.authSrv = authSrv;
  }

  logOut() {
    this.authSrv.logOut();
    this.state.go('login');
  }
}

