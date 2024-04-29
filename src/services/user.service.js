'use strict';
const db = require('../models');

class UserService {
    static getUsers = async () => {
        try {
            const users = await db.Info.findAll({
                attributes: ['id', 'dob']
            });
            return users;
        } catch (error) {
            throw new Error('Failed to retrieve users from the database');
        }
    }
}

module.exports = UserService;
