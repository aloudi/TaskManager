import angular from 'angular';
import TasksSrv from './tasks.service';

const tasksModule = angular.module('tasks.service.module', [])

  .service('tasksSrv', ['$http', '$log', '$q', 'API_URL', TasksSrv])

  .name;

export { tasksModule };
