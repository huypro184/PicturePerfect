'use strict';

// Hàm kiểm tra tính hợp lệ của dữ liệu hoạt động
async function activityValidator(req) {
    req.check('ID_PRODUCT', 'Product ID is required.').not().isEmpty();
    req.check('QUANTITY', 'Quantity is required.').not().isEmpty().isInt();
    req.check('DAY', 'Day is required.').not().isEmpty().isDate();
    req.check('TOTAL_PRICE', 'Total price is required.').not().isEmpty().isFloat();
    return await raiseErr(req);
}

// Hàm kiểm tra tính hợp lệ của dữ liệu hóa đơn
async function billValidator(req) {
    req.check('ID_ACT', 'Activity ID is required.').not().isEmpty();
    req.check('ID_INFO', 'Info ID is required.').not().isEmpty();
    req.check('TOTAL_PRICE', 'Total price is required.').not().isEmpty().isFloat();
    return await raiseErr(req);
}

// Hàm raiseErr: Kiểm tra và trả về lỗi nếu có
async function raiseErr(req) {
    let errors = await req.getValidationResult();
    if (!errors.isEmpty()) {
        let err = errors.array();
        let firstError = err.map(error => error.msg)[0];
        return firstError; // Trả về lỗi đầu tiên nếu có
    }
    return null; // Trả về null nếu không có lỗi
}

// Export các hàm để sử dụng trong controller và các module khác
module.exports = {
    activityValidator,
    billValidator
};