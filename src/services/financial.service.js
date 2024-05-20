'use strict';

const { Activity } = require('../models/activity');
const { Salary } = require('../models/salary');
const { sequelize, Op } = require('sequelize');

// Hàm lấy doanh thu hàng ngày/tuần/tháng
async function getRevenueByPeriod(period) {
    const groupBy = {
        day: sequelize.fn('DATE', sequelize.col('DAY')),
        week: sequelize.fn('WEEK', sequelize.col('DAY')),
        month: sequelize.fn('MONTH', sequelize.col('DAY'))
    };

    return await Activity.findAll({
        attributes: [
            [groupBy[period], 'period'],
            [sequelize.fn('SUM', sequelize.col('TOTAL_PRICE')), 'total_revenue']
        ],
        group: [groupBy[period]]
    });
}

// Hàm lấy chi phí hàng ngày/tuần/tháng
async function getExpensesByPeriod(period) {
    const groupBy = {
        day: sequelize.fn('DATE', sequelize.col('DAY')),
        week: sequelize.fn('WEEK', sequelize.col('DAY')),
        month: sequelize.fn('MONTH', sequelize.col('DAY'))
    };

    return await Salary.findAll({
        attributes: [
            [groupBy[period], 'period'],
            [sequelize.fn('SUM', sequelize.col('TOTAL')), 'total_expense']
        ],
        group: [groupBy[period]]
    });
}

// Hàm tính lợi nhuận hàng ngày/tuần/tháng
async function getProfitByPeriod(period) {
    const revenue = await getRevenueByPeriod(period);
    const expenses = await getExpensesByPeriod(period);

    let profit = revenue.map(rev => {
        let exp = expenses.find(exp => exp.dataValues.period === rev.dataValues.period);
        return {
            period: rev.dataValues.period,
            total_profit: rev.dataValues.total_revenue - (exp ? exp.dataValues.total_expense : 0)
        };
    });

    return profit;
}

module.exports = {
    getRevenueByPeriod,
    getExpensesByPeriod,
    getProfitByPeriod
};
