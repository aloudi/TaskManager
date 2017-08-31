import template from './nav.bar.html';
import NavBarController from './nav.bar.controller';
import './nav.bar.scss';

const navBarComponent = {
  bindings: {
    email: '<',
  },
  template,
  controller: ['$http', '$state', '$log', 'authSrv', NavBarController],
};

export { navBarComponent };
