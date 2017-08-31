import angular from 'angular';
import { editInputComponent } from './edit.input.component';

const editInputModule = angular.module('edit.input.module', [])

  .component('editInput', editInputComponent)

  .name;

export { editInputModule };
