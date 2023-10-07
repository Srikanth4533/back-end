const express = require("express");

const adminRouter = express.Router();

adminRouter.get("/sri", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "In Admin Route",
  });
});

adminRouter.get("/products", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "All Products",
  });
});

adminRouter.get("/orders", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "All Orders",
  });
});

module.exports = adminRouter;
