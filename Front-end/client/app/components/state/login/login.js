import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { loginComponent } from './login.component';

const loginModule = angular.module('login.module', [
  uiRouter,
])

  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('login', {
        url: '/',
        component: 'login',
      });
  })

  .component('login', loginComponent)

  .name;

export { loginModule };
