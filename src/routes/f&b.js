var express = require('express');
var router = express.Router();
const { asyncHandler } = require('../helpers/index');

const ProductController = require("../controllers/f&b.controller");

/* GET users listing. */
debugger

// Route POST ("/"): Tạo một sản phẩm mới
router.post("/", asyncHandler(ProductController.createProductController));

// Route GET ("/:productName"): Lấy thông tin về một sản phẩm dựa trên productName
router.get("/:productName", asyncHandler(ProductController.getProductController));

// Route PUT ("/:productName"): Cập nhật thông tin của một sản phẩm dựa trên productName
router.put("/:productName", asyncHandler(ProductController.updateProductController));

// Route DELETE ("/:productName"): Xóa một sản phẩm dựa trên productName
router.delete("/:productName", asyncHandler(ProductController.deleteProductController));

module.exports = router;
