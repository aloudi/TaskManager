import angular from 'angular';
import { navBarComponent } from './nav.bar.component';

const navBarModule = angular.module('nav.bar.module', [])

  .component('navBar', navBarComponent)

  .name;

export { navBarModule };
