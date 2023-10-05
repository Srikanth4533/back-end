const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
require("dotenv").config();

const path = require("path");

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
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

app.post("/fileupload", upload.single("myfile"), (req, res) => {
  console.log(req.file);
  res.status(201).json({
    staus: "success",
    message: "File uploaded successfully..",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
