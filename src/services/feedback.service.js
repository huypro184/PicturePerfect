'use strict';
const { Feedback } = require('../models'); // Import model Feedback

// Tạo một phản hồi mới
let createFeedback = async (FEEDBACK, SERVICE, RATE) => {
  return await Feedback.create({ FEEDBACK, SERVICE, RATE });
};

// Lấy tất cả các phản hồi
let getAllFeedbacks = async () => {
  return await Feedback.findAll();
};

// Lấy phản hồi gần đây nhất (ví dụ: 10 phản hồi gần nhất)
let getRecentFeedbacks = async (limit = 10) => {
  return await Feedback.findAll({
    order: [['createdAt', 'DESC']], // Sắp xếp theo thời gian tạo giảm dần
    limit: limit
  });
};

// Tính điểm đánh giá trung bình theo thời gian (ví dụ: theo tuần, tháng)
let getAverageRateOverTime = async (timePeriod) => {
  // Thực hiện truy vấn SQL để tính điểm trung bình dựa trên timePeriod
  // (Cần điều chỉnh truy vấn tùy thuộc vào cơ sở dữ liệu bạn sử dụng)
};

// Lấy danh sách phản hồi tiêu cực (ví dụ: RATE < 3)
let getNegativeFeedbacks = async (threshold = 3) => {
  return await Feedback.findAll({
    where: { RATE: { [Op.lt]: threshold } } // RATE nhỏ hơn threshold
  });
};

module.exports = {
  createFeedback,
  getAllFeedbacks,
  getRecentFeedbacks,
  getAverageRateOverTime,
  getNegativeFeedbacks,
};
