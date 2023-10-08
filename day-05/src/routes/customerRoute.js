const express = require("express");

const customerRoute = express.Router();

customerRoute.get("/product", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Customer Ordering Product",
  });
});

module.exports = customerRoute;
