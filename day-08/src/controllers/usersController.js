const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  // Check if user is already registered or not

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User Already Exists Please LogIn",
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 16);
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });

      res.status(201).json({
        message: "User Created Successfully..",
        data: user,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An Error Occured",
      error,
    });
  }
};
