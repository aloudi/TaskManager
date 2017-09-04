import angular from 'angular';
import UserSrv from './user.service';

const userModule = angular.module('user.service.module', [])

  .service('userSrv', ['$http', '$log', 'API_URL', UserSrv])

  .name;

export { userModule };
