import angular from 'angular';

// element components
import { navBarModule } from './element/nav-bar/nav.bar';
import { editInputModule } from './element/edit-input/edit.input';
import { tasksModule } from './element/tasks/tasks';

// state components
import { homeModule } from './state/home/home';
import { loginModule } from './state/login/login';

const componentsModule = angular.module('app.components', [

  navBarModule,
  editInputModule,
  tasksModule,

  homeModule,
  loginModule,

])

  .name;

export { componentsModule };
