import angular from 'angular';
import { tasksComponent } from './tasks.component';

const tasksModule = angular.module('tasks.component.module', [])

  .component('tasks', tasksComponent)

  .name;

export { tasksModule };
