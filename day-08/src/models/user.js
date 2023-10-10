const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "minimum 3 characters is required"],
  },
  lastName: {
    type: String,
    required: [true, "minimum 3 characters is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password should be more than 5 characters"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
