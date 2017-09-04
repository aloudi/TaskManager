import angular from 'angular';
import { autoFocusDirective } from './auto-focus.directive';

const autoFocusModule = angular.module('auto.focus.directive.module', [])

  .directive('autoFocus', [autoFocusDirective])

  .name;

export { autoFocusModule };
