import template from './login.html';
import LoginController from './login.controller';
import './login.scss';

const loginComponent = {
  bindings: {},
  template,
  controller: ['$state', '$log', 'authSrv', LoginController],
};

export { loginComponent };
