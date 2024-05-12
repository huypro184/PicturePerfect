var express = require('express');
var router = express.Router();
const { asyncHandler } = require('../helpers/index');

const FinancialController = require("../controllers/financial.controller");

/* GET users listing. */
debugger

/* POST ("/activity"): Tạo một Activity mới */
router.post("/activity", asyncHandler(FinancialController.createActivityController));

/* POST ("/bill"): Tạo một Bill mới */
router.post("/bill", asyncHandler(FinancialController.createBillController));

module.exports = router;