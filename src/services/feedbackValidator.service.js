'use strict';
const { check, validationResult } = require('express-validator');

let raiseErr = async (req) => { /* ... (giống như trước) ... */ };

let feedbackValidator = async (req) => {
  await check('FEEDBACK', 'Feedback is required.').not().isEmpty().run(req);
  await check('SERVICE', 'Service is required.').not().isEmpty().run(req);
  await check('RATE', 'Rate is required.').not().isEmpty().isInt({ min: 1, max: 5 }).run(req); // Giả sử đánh giá từ 1 đến 5

  return await raiseErr(req);
};

module.exports = {
  feedbackValidator,
};
