var express = require('express');
var router = express.Router();
const { asyncHandler } = require('../helpers/index');

const RoomController = require("../controllers/room.controller");

// Route POST ("/"): Tạo một Room mới
router.post("/", asyncHandler(RoomController.createRoomController));

// Route PUT ("/:id"): Cập nhật thông tin của một Room dựa trên ID
router.put("/:id", asyncHandler(RoomController.updateRoomController));

// Route DELETE ("/:id"): Xóa một Room dựa trên ID
router.delete("/:id", asyncHandler(RoomController.deleteRoomController));

module.exports = router;
