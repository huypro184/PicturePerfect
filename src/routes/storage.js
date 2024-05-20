const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../helpers/index');

const StorageController = require("../controllers/storage.controller");

// Route POST ("/"): Tạo một bản ghi lưu trữ mới
router.post("/", asyncHandler(StorageController.createStorageController));

// Route GET ("/:name"): Lấy thông tin về một bản ghi lưu trữ dựa trên tên
router.get("/:name", asyncHandler(StorageController.getStorageController));

// Route PUT ("/:name"): Cập nhật thông tin của một bản ghi lưu trữ dựa trên tên
router.put("/:name", asyncHandler(StorageController.updateStorageController));

// Route DELETE ("/:name"): Xóa một bản ghi lưu trữ dựa trên tên
router.delete("/:name", asyncHandler(StorageController.deleteStorageController));

// Route GET ("/history"): Lấy lịch sử các bản ghi lưu trữ
router.get("/history", asyncHandler(StorageController.getStorageHistoryController));

module.exports = router;
