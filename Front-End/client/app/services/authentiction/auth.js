import angular from 'angular';
import AuthService from './auth.service';

const authModule = angular.module('auth.service.module', [])

  .service('authSrv', ['$http', '$log', '$q', 'API_URL', 'jwtSrv', AuthService])

  .name;

export { authModule };
