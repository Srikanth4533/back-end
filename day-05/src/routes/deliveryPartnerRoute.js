const express = require("express");

const deliveryPartnerRoute = express.Router();

deliveryPartnerRoute.get("/order", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Delivery Partner Providing the delivery services",
  });
});

module.exports = deliveryPartnerRoute;
