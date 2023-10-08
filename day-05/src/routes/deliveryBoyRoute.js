const express = require("express");

const deliveryBoyRoute = express.Router();

deliveryBoyRoute.get("/order", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Delivery boy Taking Orders",
  });
});

module.exports = deliveryBoyRoute;
