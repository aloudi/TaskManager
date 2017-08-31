import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularJwtModule from 'angular-jwt';
import 'normalize.css';
import { constantsModule } from './constants/constants';
import { servicesModule } from './services/services';
import { componentsModule } from './components/components';
import { directivesModule } from './directives/derectives';
import { appComponent } from './app.component';

const appDependencies = [
  uiRouter,
  angularJwtModule,
  constantsModule,
  servicesModule,
  componentsModule,
  directivesModule,
];

angular.module('app', appDependencies)

  .config(['$locationProvider', '$httpProvider', '$stateProvider', 'jwtOptionsProvider',
    ($locationProvider, $httpProvider, $stateProvider, jwtOptionsProvider) => {
      'ngInject';

      // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
      // #how-to-configure-your-server-to-work-with-html5mo
      $locationProvider.html5Mode(true).hashPrefix('!');

      // jwtInterceptor config
      jwtOptionsProvider.config({
        tokenGetter: ['jwtSrv', (jwtSrv) => {
          jwtSrv.get();
        }],
        whiteListedDomains: ['localhost'],
      });

      // adds jwt to every api request
      $httpProvider.interceptors.push('jwtInterceptor');
    }])

  .component('app', appComponent);

