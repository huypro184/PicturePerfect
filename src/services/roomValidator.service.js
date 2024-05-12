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
  req.check('SLOT', 'Slot number is required.').not().isEmpty();
  return await raiseErr(req);
}

module.exports = {
  roomValidator,
};
