'use strict';

const UserService = require('../services/user.service');
const { OK } = require('../helpers/index');

class UserController {
    async get_list_users(req, res, next) {
        try {
            const users = await UserService.getUsers();
            res.status(200).json({
                message: 'Users retrieved successfully',
                data: users
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();
