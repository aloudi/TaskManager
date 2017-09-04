import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { homeComponent } from './home.component';

const homeModule = angular.module('home.component.module', [
  uiRouter,
])

  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('home', {
        url: '/home',
        component: 'home',
        resolve: {
          user: ['userSrv', userSrv => userSrv.getUser()],
        },
      });
  })

  .run(['$transitions', '$state', 'authSrv', ($transitions, $state, authSrv) => {
    $transitions.onStart({}, () => {
      if (!authSrv.isSignedIn()) {
        $state.go('login', { notify: false });
      }
    });
  }])

  .component('home', homeComponent)

  .name;

export { homeModule };
