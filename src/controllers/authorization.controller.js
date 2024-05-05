'use strict';

const {register} = require('../services/authorization.service');
const {registerValidator} = require('../services/authorizationValidator.service');
const { OK } = require('../helpers/index');

class AuthController {
    async registerUser(req, res, next) {
        try {
            const validator = await registerValidator(req);
            if (validator !== null) {
                return res.send({ message: validator });
            } else {
                const registered = await register(req.body);
                if (registered === true) {
                    return res.send({ message: 'Register successfully.' });
                } else {
                    return res.send({ message: 'Email has been used.' });
                }
            }
        } catch (error) {
            return res.status(500).send({ error: 'Server Error' });
        }
    }

    async login(req, res, next) {
        try {
            let isLogged = await isLogging(req);
            if (isLogged === true) {
                return res.send({ message: "You are logged in." });
            }
            let validator = await loginValidator(req);
            if (validator !== null) {
                return res.send({ message: validator });
            }
            let signIned = await signIn(req)
            if (signIned === false) {
                return res.send({ message: "Email or Password is incorrect" });
            } else {
                return res.send({ message: "Sign In successfully." });
            }
        } catch (error) {
            return res.status(500).send({ error: "Server Error" });
        }
    }
};

module.exports = new AuthController();