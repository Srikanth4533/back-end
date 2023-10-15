const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.handleUserRegister = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(200).json({
        message: "User Already Registered Please Login",
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role,
      });

      const token = await jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "2d" }
      );

      res.status(201).json({
        message: "User Registered Successfully...",
        data: user,
        token,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "An Error Occured",
    });
  }
};

exports.handleUserLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = await jwt.sign(
          { id: user._id, email: user.email, role: user.role },
          process.env.JWT_SECRET,
          {
            expiresIn: "2d",
          }
        );

        res.status(200).json({
          message: "User Logged In Successfully...",
          token,
        });
      } else {
        res.status(400).json({
          message: "Invalid Credentials",
        });
      }
    } else {
      res.status(400).json({
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Invalid Credentials",
    });
  }
};
