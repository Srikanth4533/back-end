const express = require("express");
const mongoose = require("mongoose");
const Friends = require("./db");
require("dotenv").config();

const app = express();

app.use(express.json());

mongoose
  .connect(`${process.env.MONGO_URL}/labs`)
  .then(() => {
    console.log(`MongoDB connected successfully...`);
  })
  .catch((err) => {
    console.log(`DB connection error`);
    console.log(err);
  });

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Home Page",
  });
});

app.post("/api/save_friends", async (req, res) => {
  const friend = await Friends.create({ name: req.body.name });
  res.status(201).json({
    status: "success",
    message: "ok",
    data: friend,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port no ${process.env.PORT}`);
});
