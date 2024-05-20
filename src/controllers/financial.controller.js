'use strict';

const { getRevenueByPeriod, getExpensesByPeriod, getProfitByPeriod } = require('../services/financial.service');
const { periodValidator } = require('../services/financialValidator.service');
const { OK } = require('../helpers/index');

class FinancialController {
    async getRevenue(req, res, next) {
        try {
            let validationError = await periodValidator(req);
            if (validationError !== null) {
                return res.status(400).json({ message: validationError });
            }
            const { period } = req.query; // 'day', 'week', 'month'
            const revenue = await getRevenueByPeriod(period);
            return res.status(OK).json({ data: revenue });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Server Error" });
        }
    }

    async getExpenses(req, res, next) {
        try {
            let validationError = await periodValidator(req);
            if (validationError !== null) {
                return res.status(400).json({ message: validationError });
            }
            const { period } = req.query; // 'day', 'week', 'month'
            const expenses = await getExpensesByPeriod(period);
            return res.status(OK).json({ data: expenses });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Server Error" });
        }
    }

    async getProfit(req, res, next) {
        try {
            let validationError = await periodValidator(req);
            if (validationError !== null) {
                return res.status(400).json({ message: validationError });
            }
            const { period } = req.query; // 'day', 'week', 'month'
            const profit = await getProfitByPeriod(period);
            return res.status(OK).json({ data: profit });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Server Error" });
        }
    }
}

module.exports = new FinancialController();
