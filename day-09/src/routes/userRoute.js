const express = require("express");
const {
  handleUser,
  handleRegister,
  handleLogIn,
} = require("../controllers/userController");

const userRoute = express.Router();

userRoute.get("/", handleUser);

userRoute.post("/register", handleRegister);

userRoute.post("/login", handleLogIn);

module.exports = userRoute;
