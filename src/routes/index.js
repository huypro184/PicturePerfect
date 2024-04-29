const express = require('express');

const usersRouter = require('./users');

const admin_api = express();

admin_api.use('/users', usersRouter);

module.exports = admin_api;