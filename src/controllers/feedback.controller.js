'use strict';

const { createFeedback, getAllFeedbacks, getRecentFeedbacks, getAverageRateOverTime, getNegativeFeedbacks } = require('../services/feedback.service');
const { feedbackValidator } = require('../services/feedbackValidator.service');

class FeedbackController {
  // Phương thức tạo mới một phản hồi
  async createFeedbackController(req, res, next) {
    try {
      // Kiểm tra tính hợp lệ của dữ liệu phản hồi trước khi tạo
      let validationError = await feedbackValidator(req);
      if (validationError !== null) {
        return res.status(400).json({ message: validationError });
      }
      
      let { FEEDBACK, SERVICE, RATE } = req.body;

      // Gọi hàm tạo mới phản hồi từ service
      let result = await createFeedback(FEEDBACK, SERVICE, RATE);

      return res.status(201).json({
        message: "Feedback created successfully.",
        data: result
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server Error" });
    }
  }

  // Phương thức lấy tất cả các phản hồi
  async getAllFeedbacksController(req, res, next) {
    try {
      let result = await getAllFeedbacks();
      return res.status(200).json({
        message: "Fetch all feedbacks successfully.",
        data: result
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server Error" });
    }
  }

  // Phương thức lấy các phản hồi gần đây nhất
  async getRecentFeedbacksController(req, res, next) {
    try {
      let limit = parseInt(req.query.limit) || 10;
      let result = await getRecentFeedbacks(limit);
      return res.status(200).json({
        message: "Fetch recent feedbacks successfully.",
        data: result
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server Error" });
    }
  }

  // Phương thức tính điểm đánh giá trung bình theo thời gian
  async getAverageRateOverTimeController(req, res, next) {
    try {
      let timePeriod = req.query.timePeriod; // Cần xác định cách lấy thời gian từ request
      let result = await getAverageRateOverTime(timePeriod);
      return res.status(200).json({
        message: "Fetch average rate over time successfully.",
        data: result
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server Error" });
    }
  }

  // Phương thức lấy danh sách các phản hồi tiêu cực
  async getNegativeFeedbacksController(req, res, next) {
    try {
      let threshold = parseInt(req.query.threshold) || 3;
      let result = await getNegativeFeedbacks(threshold);
      return res.status(200).json({
        message: "Fetch negative feedbacks successfully.",
        data: result
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server Error" });
    }
  }
}

module.exports = new FeedbackController();
