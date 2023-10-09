const express = require("express");
const { handleGetStudents } = require("../controllers/adminController");

const adminRoute = express.Router();

adminRoute.get("/get_students", handleGetStudents);

module.exports = adminRoute;
