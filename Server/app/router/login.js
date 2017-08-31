/* Login router */
const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../JWT/secret');
const errorHandler = require('../handlers/error');
const Users = require('../models/users');

const router = express.Router();

/* localhost:8082/api/login/ */
// Post //

router.route('/')

  // log in user
  .post('/', (req, res) => {
    if (!req.body.email || !req.body.password) {
      errorHandler(res, 'email and password required');
    }

    Users.findOne({ email: req.body.email }).then(
      (user) => {
        if (user === []) {
          errorHandler(res, 'Username or password is incorrect');
        }
        if (user.password === req.body.password) {
          const userToken = jwt.sign({ _id: user._id }, JWT_SECRET);
          res.json(userToken);
        } else {
          errorHandler(res, 'Username or password is incorrect');
        }
      },
      (err) => { errorHandler(res, err); },
    );
  });

module.exports = router;
