const express = require("express");

const customerCareRoute = express.Router();

customerCareRoute.get("/faqs", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Customer Asking FAQs",
  });
});

module.exports = customerCareRoute;
