'use strict';

let { check, validationResult } = require('express-validator');

// Hàm raiseErr: Kiểm tra và trả về lỗi nếu có
let raiseErr = async (req) => {
  let errors = await validationResult(req);
  if (!errors.isEmpty()) {
    let err = errors.array();
    let firstError = err.map(error => error.msg)[0];
    return firstError;
  }
  return null;
}

// Hàm storageValidator: Kiểm tra tính hợp lệ của dữ liệu kho
let storageValidator = async (req) => {
  req.check('NAME', 'Name is required.').not().isEmpty();
  req.check('QUANTITY', 'Quantity is required and must be a non-negative integer.').isInt({ min: 0 });

  return await raiseErr(req);
}

module.exports = {
  storageValidator,
};
