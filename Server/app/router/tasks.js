/* Tasks router */
const express = require('express');
const expressJWT = require('express-jwt');
const JWT_SECRET = require('../JWT/secret');
const errorHandler = require('../handlers/error');
const Users = require('../models/users');
const Tasks = require('../models/tasks');

const router = express.Router();

/* localhost:8082/api/users/tasks */
// Get, Posts, Put, Delete //

router.route('/')

  // Checks the authorization header, decodes the token, and attaches the payload to req.user
  .all(expressJWT({ secret: JWT_SECRET }))

  // Send out a 200 status response to a pre-flight options request
  .options((req, res) => { res.status(200).send(); })

  // Get tasks
  .get((req, res) => {
    Tasks.find({ _userId: req.user._id })
      .then(
        tasks => res.json(tasks),
        err => errorHandler(res, err),
      );
  })

  // Create new task
  .post((req, res) => {
    const task = new Tasks({
      _userId: req.user._id,
      task: req.body.task,
    });

    task.save((err) => {
      if (err) { errorHandler(res, err); }
    });

    Users.findById(req.user._id, 'tasks')
      .then(
        (user) => {
          user.tasks.unshift(task._id);
          user.save((err) => {
            if (err) { errorHandler(res, err); } else { res.json(task); }
          });
        },
        (err) => { errorHandler(res, err); },
      );
  })

  // Edit task
  .put((req, res) => {
    if (!req.body._id) { errorHandler(res, 'task Id required'); }

    Tasks.findById(req.body._id, 'task').then(
      (task) => {
        task.task = req.body.task;
        task.save((err) => {
          if (err) { errorHandler(res, err); } else { res.send('task edited'); }
        });
      },
      (err) => { errorHandler(res, err); },
    );
  })

  // Delete task
  .delete((req, res) => {
    if (!req.query._id) {
      errorHandler(res, 'id required');
    }

    Tasks.findByIdAndRemove(req.query._id)
      .then(
        () => {
          Users.findById(req.user._id, 'tasks')
            .then(
              (user) => {
                const index = user.tasks.indexOf(req.query._id);
                user.tasks.splice(index, 1);
                user.save((err) => {
                  if (err) { errorHandler(res, err); } else { res.json('task deleted'); }
                });
              },
              (err) => { errorHandler(res, err); },
            );
        },
        (err) => { errorHandler(res, err); },
      );
  });

module.exports = router;
