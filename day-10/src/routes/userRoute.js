const express = require("express");
const {
  hanldeUserRegister,
  handleUserLogin,
} = require("../controllers/userController");

const userRoute = express.Router();

userRoute.post("/register", hanldeUserRegister);
userRoute.post("/login", handleUserLogin);

module.exports = userRoute;
