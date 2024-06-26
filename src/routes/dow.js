var express = require('express');
var router = express.Router();
const { asyncHandler } = require('../helpers/index');
const DowController = require("../controllers/dow.controller");

// Route POST ("/"): Tạo một Dow mới
router.post("/", asyncHandler(DowController.createDowController));

// Route PUT ("/:id"): Cập nhật thông tin của một Dow dựa trên ID
router.put("/:id", asyncHandler(DowController.updateDowController));

// Route DELETE ("/:id"): Xóa một Dow dựa trên ID
router.delete("/:id", asyncHandler(DowController.deleteDowController));

module.exports = router;
