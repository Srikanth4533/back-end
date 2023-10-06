const express = require("express");
const multer = require("multer");
const path = require("path");
require("dotenv").config();
require("./config/db");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Home Page",
  });
});

app.post("/fileupload", upload.single("myfile"), (req, res) => {
  res.status(200).json({
    status: "success",
    message: "File Uploaded successfully",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server started at port no ${process.env.PORT}`);
});
