const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.virtual("password").set(function (password) {
//   this.password = bcrypt.hashSync(password, 16);
// });

const User = mongoose.model("User", userSchema);

module.exports = User;
