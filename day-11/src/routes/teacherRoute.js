const express = require("express");
const { checkForValidUser } = require("../middlewares/auth");
const { handleTeacherCreate } = require("../controllers/teacherController");
const { customRole } = require("../middlewares/role");

const teacherRoute = express.Router();

teacherRoute.post(
  "/create",
  checkForValidUser,
  customRole("teacher"),
  handleTeacherCreate
);

module.exports = teacherRoute;
