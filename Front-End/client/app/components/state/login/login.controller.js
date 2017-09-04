export default class LoginController {
  constructor($scope, $state, $log, authSrv) {
    this.scope = $scope;
    this.state = $state;
    this.logger = $log;
    this.authSrv = authSrv;
    this.loginOrSignUpFailure = false;
    this.loginOrSignUpFailureMessage = '';
  }

  auth(type) {
    const data = {
      email: this.loginData.email,
      password: this.loginData.password,
    };

    this.authSrv.authenticate(type, data)
      .then(
        () => this.state.go('home'),
        () => {
          if (type === 'login') {
            this.loginOrSignUpFailureMessage = 'Unable to login, please check your email and password and try again';
          }
          if (type === 'signUp') {
            this.loginOrSignUpFailureMessage = 'Unable to create new account, this email is already in use';
          }
          this.scope.loginForm.$setPristine();
          this.loginOrSignUpFailure = true;
        },
      );
  }
}
