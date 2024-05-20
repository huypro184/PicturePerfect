const express = require('express');

const usersRouter = require('./users');
const loginRouter = require('./login');
const registerRouter = require('./register');
const staffRouter = require('./staff');
const feedbackRouter = require('./feedback');
const dowRouter = require('./dow');
const financialRouter = require('./financial');
const roomRouter = require('./room');
const dowRouter = require('./dow');
const storageRouter = require('./storage');

const admin_api = express();

admin_api.use('/users', usersRouter);
admin_api.use('/login', loginRouter);
admin_api.use('/register', registerRouter);
admin_api.use('/staff', staffRouter);
admin_api.use('/feedback', feedbackRouter);
admin_api.use('/dow', dowRouter);
admin_api.use('/financial', financialRouter);
admin_api.use('/room', roomRouter);
admin_api.use('/storage', storageRouter);

module.exports = admin_api;