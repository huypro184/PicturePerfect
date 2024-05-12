'use strict';

const { Info } = require("../models/info");

// Hàm kiểm tra và trả về lỗi nếu có
let raiseErr = async (req) => {
  let errors = await req.getValidationResult();
  if (!errors.isEmpty()) {
    let err = errors.array();
    let firstError = err.map(error => error.msg)[0];
    return firstError;
  }
  return null;
}

// Hàm kiểm tra tính hợp lệ của dữ liệu Dow
let dowValidator = async (req) => {
  req.check('startTime', 'Start time is required.').not().isEmpty();
  req.check('endTime', 'End time is required.').not().isEmpty();
  req.check('day', 'Day is required.').not().isEmpty();
  req.check('idInfo', 'ID info is required.').not().isEmpty();

  let startTime = req.body.startTime;
  let endTime = req.body.endTime;
  if (startTime >= endTime) {
    req.check('endTime', 'End time must be greater than start time.').custom(() => false);
  }
  return await raiseErr(req);
}

module.exports = {
  dowValidator,
};
