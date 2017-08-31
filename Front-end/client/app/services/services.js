import angular from 'angular';
import { authModule } from './authentiction/auth';
import { jwtModule } from './jwt/jwt';
import { tasksModule } from './tasks/tasks';
import { userModule } from './user/user';

const servicesModule = angular.module('app.services', [

  authModule,
  jwtModule,
  tasksModule,
  userModule,

])

  .name;

export { servicesModule };
