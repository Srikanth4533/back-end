const express = require("express");
const { handleTeacherCreate } = require("../controllers/teacherController");
const { validUserCheck } = require("../middlewares/auth");

const teacherRoute = express.Router();

let authMiddleware = (req, res, next) => {
  console.log(req.headers.authorization.split(" ")[1]);
  next();
};

teacherRoute.post("/create", validUserCheck, handleTeacherCreate);

module.exports = teacherRoute;
