import angular from 'angular';
import JWT from './jwt.service';

const jwtModule = angular.module('jwt.service.module', [])

  .service('jwtSrv', ['$window', JWT])

  .name;

export { jwtModule };

