export default class HomeController {
  constructor($http, $log, $scope, API_URL, tasksSrv, user) {
    this.http = $http;
    this.logger = $log;
    this.scope = $scope;
    this.API_URL = API_URL;
    this.user = user;
    this.tasksSrv = tasksSrv;
    this.editView = [];
    this.newTask = '';
  }

  viewSwitcher(index) {
    for (let i = 0; i < this.user.tasks.length; i++) {
      this.editView[i] = false;
    }
    this.editView[index] = true;
  }

  addNewTask() {
    const data = {
      task: this.newTask,
    };

    const resetTaskView = () => {
      this.scope.showNewTaskInput = false;
      this.newTask = '';
    };

    this.tasksSrv.addTask(data)
      .then(
        (response) => {
          this.user.tasks.unshift(response.data);
          resetTaskView();
        },
        (err) => {
          this.logger.log(`unable to add task, ${err}`);
          resetTaskView();
        },
      );
  }

  editTask(altTask, taskId) {
    const data = {
      task: altTask,
      _id: taskId,
    };

    this.tasksSrv.editTask(data)
      .then(
        () => {
          for (let i = 0; i < this.user.tasks.length; i++) {
            if (this.user.tasks[i]._id === taskId) {
              this.user.tasks[i].task = altTask;
            }
          }
          this.viewSwitcher();
        },
        (err) => {
          this.logger.log(`unable to edit task, ${err.data}`);
        },
      );
  }

  deleteTask(taskId) {
    const data = { _id: taskId };

    this.tasksSrv.deleteTask(data)
      .then(
        () => {
          for (let i = 0; i < this.user.tasks.length; i++) {
            if (this.user.tasks[i]._id === taskId) {
              this.user.tasks.splice(i, 1);
            }
          }
        },
        (err) => {
          this.logger.log(`unable to delete task, ${err}`);
        },
      );
  }
}

