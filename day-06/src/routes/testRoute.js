const express = require("express");
const {
  testHandler,
  testOrdersHandler,
} = require("../controllers/testController");

const testRoute = express.Router();

testRoute.get("/", testHandler);

testRoute.get("/orders", testOrdersHandler);

module.exports = testRoute;
