const express = require("express");
const { registerUser } = require("../controllers/UsersController");

const usersRoute = express.Router();

usersRoute.post("/register", registerUser);

module.exports = usersRoute;
