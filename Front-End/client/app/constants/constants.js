import angular from 'angular';

const constantsModule = angular.module('app.constants.module', [])

  .constant('API_URL', 'http://localhost:8082/api')

  .name;

export { constantsModule };
