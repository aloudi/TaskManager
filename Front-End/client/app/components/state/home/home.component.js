import template from './home.html';
import HomeController from './home.controller';
import './home.scss';

const homeComponent = {
  bindings: {
    user: '<',
  },
  template,
  controller: ['$scope', HomeController],

};

export { homeComponent };
