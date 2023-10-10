const mongoose = require("mongoose");

function connectDB() {
  return mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log(`MongoDB Connected Successfully..`);
    })
    .catch((err) => {
      console.log("DB connection error");
      console.log(err);
    });
}

module.exports = connectDB;
