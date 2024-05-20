'use strict';
const { check, validationResult } = require('express-validator');

// Hàm raiseErr: Kiểm tra và trả về lỗi nếu có
let raiseErr = async (req) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    let err = errors.array();
    let firstError = err.map(error => error.msg)[0];
    return firstError; // Trả về lỗi đầu tiên nếu có
  }
  return null; // Trả về null nếu không có lỗi
};

// Hàm staffValidator: Kiểm tra tính hợp lệ của dữ liệu nhân viên
let staffValidator = async (req) => {
  // Kiểm tra xem trường NAME có tồn tại không và không được để trống
  await check('NAME', 'Name is required.').not().isEmpty().run(req);
  // Kiểm tra xem trường PHONE có tồn tại không và không được để trống
  await check('PHONE', 'Phone number is required.').not().isEmpty().run(req);
  // Kiểm tra xem trường TITLE có tồn tại không và không được để trống
  await check('TITLE', 'Title is required.').not().isEmpty().run(req);
  // Kiểm tra xem trường EMAIL có tồn tại không và phải là một email hợp lệ
  await check('EMAIL', 'Email is required and must be valid.').isEmail().run(req);
  // Kiểm tra và trả về lỗi (nếu có)
  return await raiseErr(req);
};

// Xuất hàm staffValidator để sử dụng ở các tệp khác
module.exports = {
  staffValidator,
};
