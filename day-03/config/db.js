const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`MongoDB connected successfully...`);
  })
  .catch((err) => {
    console.log("DB connection error");
    console.log(err);
  });
