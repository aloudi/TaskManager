import template from './edit.input.html';
import EditInputController from './edit.input.controller';
import './edit.input.scss';

const editInputComponent = {
  bindings: {
    task: '<',
    index: '<',
    onEdit: '&',
    onCancel: '&',
  },
  template,
  controller: ['$log', '$scope', EditInputController],

};

export { editInputComponent };
