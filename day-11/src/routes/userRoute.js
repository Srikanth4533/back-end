const express = require("express");
const {
  handleUserLogin,
  handleUserRegister,
} = require("../controllers/userController");

const userRoute = express.Router();

userRoute.post("/register", handleUserRegister);
userRoute.post("/login", handleUserLogin);

module.exports = userRoute;
