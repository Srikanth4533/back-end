const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary");

const path = require("path");
const fs = require("fs");

require("dotenv").config();
require("./config/db");

// Cloudinary Code
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

// cloudinary.config({
//   cloud_name: 'sample',
//   api_key: '874837483274837',
//   api_secret: 'a676b67565c6767a6767d6767f676fe1',
//   secure: true
// });

app.post("/fileupload", upload.single("myfile"), (req, res) => {
  console.log(req.file);
  // Now send this file on cloudinary i.e others server
  cloudinary.v2.uploader.upload(
    req.file.path,
    { folder: "labs" },
    function (error, result) {
      console.log(result, error);
      // Delete the file from Local
      fs.unlink(req.file.path, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log(`\nDeleted file: ${req.file.filename}`);
        }
      });

      res.status(200).json({
        status: "success",
        message: "File Uploaded successfully",
        data: result,
      });
    }
  );
});

app.listen(process.env.PORT, () => {
  console.log(`Server started at port no ${process.env.PORT}`);
});
