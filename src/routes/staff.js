const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../helpers/index');

const StaffController = require("../controllers/staff.controller");

/* GET staff listing. */
debugger

// Route POST ("/"): Tạo một nhân viên mới
router.post("/", asyncHandler(StaffController.createStaffController));

// Route GET ("/:id"): Lấy thông tin về một nhân viên dựa trên ID
router.get("/:id", asyncHandler(StaffController.getStaffController));

// Route PUT ("/:id"): Cập nhật thông tin của một nhân viên dựa trên ID
router.put("/:id", asyncHandler(StaffController.updateStaffController));

// Route DELETE ("/:id"): Xóa một nhân viên dựa trên ID
router.delete("/:id", asyncHandler(StaffController.deleteStaffController));

module.exports = router;
