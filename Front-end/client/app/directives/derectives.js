import angular from 'angular';
import { autoFocusModule } from './auto-focus/auto-focus';
import { autoResizeModule } from './auto-resize/auto-resize';

const directivesModule = angular.module('app.directives', [

  autoResizeModule,
  autoFocusModule,

])

  .name;

export { directivesModule };
