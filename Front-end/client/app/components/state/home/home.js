import angular            from 'angular';
import uiRouter           from 'angular-ui-router';
import { homeComponent }  from './home.component';

let homeModule = angular.module( 'home.module', [
    uiRouter
  ])

  .config( ( $stateProvider, $urlRouterProvider ) => {
   "ngInject";

    $stateProvider
     .state( 'home', {
       url: '/home',
       component: 'home',
       resolve: {
         user: [ 'userSrv', ( userSrv ) => {
           return userSrv.getUser();
         }],
       },
     });

  })

  .run( [ '$transitions', '$state', 'authSrv', ( $transitions, $state, authSrv ) => {

    $transitions.onStart( {} , () => {
      if ( !authSrv.isSignedIn() ) {
        $state.go( 'login', { notify: false } );
      }
    })

  }])

  .component( 'home', homeComponent )

  .name;

export { homeModule };
