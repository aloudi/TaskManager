const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TasksSchema = new Schema({
  _userId: { type: Schema.Types.ObjectId, ref: 'Users' },
  task: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Tasks', TasksSchema);
