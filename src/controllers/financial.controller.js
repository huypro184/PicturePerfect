'use strict';

const { createActivity, createBill } = require('../services/staff.service');
const { activityValidator, billValidator } = require('../services/staffValidator.service');
const { OK } = require('../helpers/index');

class FinancialController {
    async createActivityController(req, res, next) {
        try {
            let { idProduct, quantity, day, totalPrice } = req.body;
            let validationError = await activityValidator(req);
            if (validationError !== null) {
                return res.status(400).json({ message: validationError });
            }
            let result = await createActivity(idProduct, quantity, day, totalPrice);
            return res.status(201).json({ message: "Activity created successfully.", data: result });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Server Error" });
        }
    }

    async createBillController(req, res, next) {
        try {
            let { idAct, idCont, idInfo, totalPrice } = req.body;
            let validationError = await billValidator(req);
            if (validationError !== null) {
                return res.status(400).json({ message: validationError });
            }
            let result = await createBill(idAct, idCont, idInfo, totalPrice);
            return res.status(201).json({ message: "Bill created successfully.", data: result });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Server Error" });
        }
    }
}

module.exports = new FinancialController();
