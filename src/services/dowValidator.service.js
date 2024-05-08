'use strict';

const { Info } = require("../models/info"); // Import model Info từ thư mục models

// Hàm raiseErr: Kiểm tra và trả về lỗi nếu có
let raiseErr = async (req) => {
  let errors = await req.getValidationResult();
  if (!errors.isEmpty()) {
    let err = errors.array();
    let firstError = err.map(error => error.msg)[0];
    return firstError; // Trả về lỗi đầu tiên nếu có
  }
  return null; // Trả về null nếu không có lỗi
}

// Hàm dowValidator: Kiểm tra tính hợp lệ của dữ liệu Dow
let dowValidator = async (req) => {
  // Kiểm tra xem các trường START_TIME, END_TIME, DAY và ID_INFO có tồn tại không và không được để trống
  req.check('startTime', 'Start time is required.').not().isEmpty();
  req.check('endTime', 'End time is required.').not().isEmpty();
  req.check('day', 'Day is required.').not().isEmpty();
  req.check('idInfo', 'ID info is required.').not().isEmpty();

  // Kiểm tra START_TIME < END_TIME
  let startTime = req.body.startTime;
  let endTime = req.body.endTime;
  if (startTime >= endTime) {
    req.check('endTime', 'End time must be greater than start time.').custom(() => false);
  }

  // Kiểm tra ID_INFO tồn tại và TITLE hợp lệ
  let idInfo = req.body.idInfo;
  let info = await Info.findByPk(idInfo); // Tìm kiếm thông tin từ ID_INFO trong bảng Info
  if (!info) {
    req.check('idInfo', 'ID info does not exist.').custom(() => false);
  } else {
    let validTitles = ['Head Manager', 'Manager', 'Staff', 'Customer'];
    if (!validTitles.includes(info.TITLE)) {
      req.check('idInfo', 'Invalid title for ID info.').custom(() => false);
    }
  }

  // Kiểm tra và trả về lỗi (nếu có)
  return await raiseErr(req);
}

// Xuất hàm dowValidator để sử dụng ở các tệp khác
module.exports = {
  dowValidator,
};
