import angular from 'angular';

const constantsModule = angular.module('app.constants', [])

  .constant('API_URL', 'http://localhost:8082/api')

  .name;

export { constantsModule };
