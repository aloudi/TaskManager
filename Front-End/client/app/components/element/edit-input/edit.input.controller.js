export default class EditInputController {
  constructor($log, $scope, task, index, onEdit, onCancel) {
    this.logger = $log;
    this.scope = $scope;
    this.task = task;
    this.index = index;
    this.onEdit = onEdit;
    this.onCancel = onCancel;
  }

  $onInit() {
    this.initialTaskValue = this.task.task;
  }

  edit() {
    this.onEdit({
      altTask: this.task.task,
      taskId: this.task._id,
      index: this.index,
    });
  }

  cancel() {
    this.task.task = this.initialTaskValue;
    this.onCancel();
  }
}

