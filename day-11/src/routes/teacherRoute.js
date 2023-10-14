const express = require("express");
const { checkForValidUser } = require("../middlewares/auth");
const { handleTeacherCreate } = require("../controllers/teacherController");

const teacherRoute = express.Router();

teacherRoute.post("/create", checkForValidUser, handleTeacherCreate);

module.exports = teacherRoute;
