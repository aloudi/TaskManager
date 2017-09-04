import angular from 'angular';
import { editInputComponent } from './edit.input.component';

const editInputModule = angular.module('edit.input.component.module', [])

  .component('editInput', editInputComponent)

  .name;

export { editInputModule };
