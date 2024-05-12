'use strict';

const { Activity } = require('../models/activity');
const { Bill } = require('../models/bill');


// Hàm tạo một hoạt động mới
async function createActivity(idProduct, quantity, day, totalPrice) {
    return await Activity.create({
        ID_PRODUCT: idProduct,
        QUANTITY: quantity,
        DAY: day,
        TOTAL_PRICE: totalPrice
    });
}

// Hàm tạo một hóa đơn mới
async function createBill(idAct, idCont, idInfo, totalPrice) {
    return await Bill.create({
        ID_ACT: idAct,
        ID_CONT: idCont,
        ID_INFO: idInfo,
        TOTAL_PRICE: totalPrice
    });
}

// Export các hàm để sử dụng trong controller và các module khác
module.exports = {
    createActivity,
    createBill
};
