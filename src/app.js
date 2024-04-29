require('dotenv').config()
const express = require('express');
const admin_api = require('./routes/index');
const { sequelize } = require('./databases/init.mysql')

const app =  express();

app.use('/v1/admin', admin_api);

app.get('/', (req, res) => {
    res.json({
        "message" : "Hello"
    })
})

// handling errors
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    const statusCode = error.status || 500
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: error.message || 'Internal Server Error'
    })
});

module.exports = app;