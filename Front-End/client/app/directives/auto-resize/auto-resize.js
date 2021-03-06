import angular from 'angular';
import { autoResizeDirective } from './auto-resize.directive';

const autoResizeModule = angular.module('auto.resize.directive.module', [])

  .directive('autoResize', ['$timeout', '$log', autoResizeDirective])

  .name;

export { autoResizeModule };
