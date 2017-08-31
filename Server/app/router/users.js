/* User router */
const express = require('express');
const expressJWT = require('express-jwt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../JWT/secret');
const Users = require('../models/users');
const errorHandler = require('../handlers/error');

const router = express.Router();

/* localhost:8082/api/users/ */
// Get, Post //

router.route('/')

  // Get full user with tasks
  .get(expressJWT({ secret: JWT_SECRET }), (req, res) => {
    Users.findOne({ _id: req.user._id }, 'email tasks')
      .populate('tasks')
      .exec()
      .then(
        user => res.json(user),
        err => errorHandler(res, err),
      );
  })

  // Create new user
  .post((req, res) => {
    const user = new Users({
      email: req.body.email,
      password: req.body.password,
    });

    user.save((err) => {
      if (err) {
        errorHandler(res, err);
      } else {
        const userToken = jwt.sign({ _id: user._id }, JWT_SECRET);
        res.json(userToken);
      }
    });
  });

module.exports = router;
