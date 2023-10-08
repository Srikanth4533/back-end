const express = require("express");
const {
  adminCustomerHandler,
  adminOrderHandler,
} = require("../controllers/adminController");

const adminRoute = express.Router();

adminRoute.get("/sri", adminCustomerHandler);

adminRoute.get("/order", adminOrderHandler);

module.exports = adminRoute;
