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

// Route GET ("/"): Lấy danh sách các Room cùng trạng thái của chúng
router.get("/", asyncHandler(RoomController.getRoomsController));

// Route GET ("/:id"): Lấy chi tiết một Room bao gồm thông tin khách hàng, dịch vụ đã chọn, và thời gian check-in/check-out dự kiến
router.get("/:id", asyncHandler(RoomController.getRoomDetailsController));

module.exports = router;
