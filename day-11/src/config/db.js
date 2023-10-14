const mongoose = require("mongoose");

function connectDB() {
  return mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log(`MongoDB conneced successfully...`);
    })
    .catch((err) => {
      console.log(`DB connection ERROR`);
      console.log(err);
    });
}

module.exports = connectDB;
