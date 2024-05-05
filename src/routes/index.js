const express = require('express');

const usersRouter = require('./users');
const loginRouter = require('./login');
const registerRouter = require('./register');

const admin_api = express();

admin_api.use('/users', usersRouter);
admin_api.use('/login', loginRouter);
admin_api.use('/register', registerRouter);

module.exports = admin_api;