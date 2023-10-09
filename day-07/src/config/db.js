const mongoose = require("mongoose");

function connectDB() {
  return mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log(`MongoDB connected Successfully..`);
    })
    .catch((err) => {
      console.log(`DB connection Error`);
      console.log(err);
    });
}

module.exports = connectDB;
