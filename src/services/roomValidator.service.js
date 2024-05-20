'use strict';

let { check, validationResult } = require('express-validator');

// Hàm kiểm tra và trả về lỗi nếu có
let raiseErr = async (req) => {
  let errors = await validationResult(req);
  if (!errors.isEmpty()) {
    let err = errors.array();
    let firstError = err.map(error => error.msg)[0];
    return firstError;
  }
  return null;
}

// Hàm kiểm tra tính hợp lệ của dữ liệu phòng
let roomValidator = async (req) => {
  await check('SLOTS', 'Slot number is required.').not().isEmpty().run(req);
  await check('STATUS', 'Status is required.').not().isEmpty().run(req);
  await check('STATUS', 'Invalid status.').isIn(['đang trống', 'đã đặt', 'đang dọn dẹp', 'cần sửa chữa']).run(req);
  await check('ID_INFO', 'Customer ID is required.').optional().isInt().run(req);
  await check('CHECK_IN', 'Check-in time is invalid.').optional().isISO8601().run(req);
  await check('CHECK_OUT', 'Check-out time is invalid.').optional().isISO8601().run(req);
  await check('DAY_CHECKIN', 'Check-in date is invalid.').optional().isISO8601().run(req);
  await check('DAY_CHECKOUT', 'Check-out date is invalid.').optional().isISO8601().run(req);
  await check('SERVICE', 'Service must be a string.').optional().isString().run(req);
  
  return await raiseErr(req);
}

module.exports = {
  roomValidator,
};
