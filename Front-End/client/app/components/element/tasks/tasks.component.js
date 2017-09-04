import template from './tasks.html';
import TasksController from './tasks.controller';
import './tasks.scss';

const tasksComponent = {
  bindings: {
    user: '<',
  },
  template,
  controller: ['$http', '$log', '$scope', 'API_URL', 'tasksSrv', TasksController],
};

export { tasksComponent };
