const express = require("express");
const { handleCreateUser } = require("../controllers/userController");

const userRoute = express.Router();

userRoute.post("/", handleCreateUser);

module.exports = userRoute;
