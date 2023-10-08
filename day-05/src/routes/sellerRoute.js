const express = require("express");

const sellerRoute = express.Router();

sellerRoute.get("/order", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Seller selling the products",
  });
});

module.exports = sellerRoute;
