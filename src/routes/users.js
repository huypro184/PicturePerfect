var express = require('express');
var router = express.Router();
const UserController = require('../controllers/user.controller');
const { asyncHandler } = require('../helpers/index');

/* GET users listing. */
debugger
router.get('/', asyncHandler( UserController.get_list_users ));

module.exports = router;
