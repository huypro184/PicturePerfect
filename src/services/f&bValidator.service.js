'use strict';

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

// Hàm productValidator: Kiểm tra tính hợp lệ của dữ liệu sản phẩm
let productValidator = async (req) => {
  // Kiểm tra xem trường productName có tồn tại không và không được để trống
  req.check('productName', 'Product name is required.').not().isEmpty();
  // Kiểm tra xem trường unitPrice có tồn tại không và có phải là một số không âm
  req.check('unitPrice', 'Unit price is required and must be a non-negative number.').isFloat({ min: 0 });

  // Kiểm tra và trả về lỗi (nếu có)
  return await raiseErr(req);
}

// Xuất hàm productValidator để sử dụng ở các tệp khác
module.exports = {
  productValidator,
};
