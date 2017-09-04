import angular from 'angular';
import { navBarComponent } from './nav.bar.component';

const navBarModule = angular.module('nav.bar.component.module', [])

  .component('navBar', navBarComponent)

  .name;

export { navBarModule };
