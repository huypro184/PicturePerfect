var express = require('express');
var router = express.Router();
const AuthController = require('../controllers/authorization.controller');
const { asyncHandler } = require('../helpers/index');

/* GET users listing. */
debugger
router.post('/', asyncHandler( AuthController.login ));

module.exports = router;
