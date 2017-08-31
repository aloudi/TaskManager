export default class LoginController {
  constructor($state, $log, authSrv) {
    this.state = $state;
    this.logger = $log;
    this.authSrv = authSrv;
  }

  auth(type) {
    const data = {
      email: this.loginData.email,
      password: this.loginData.password,
    };

    this.authSrv.authenticate(type, data)
      .then(
        () => this.state.go('home'),
        () => this.logger.log('unable to login / signUp'),
      )
    ;
  }
}

