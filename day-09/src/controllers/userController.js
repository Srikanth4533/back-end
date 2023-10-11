const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.handleUser = async (req, res) => {
  const { token } = req.body;
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  res.status(200).json({
    message: "JWT Decoding",
    data: decoded,
  });
};

exports.handleRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({
        message: "User Already Exists Please Login",
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 16);
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });

      const token = await jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRY * 24 * 60 * 60 * 1000,
        }
      );

      res.status(201).json({
        message: "User Create Successfully",
        user,
        token,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error Occured",
      error,
    });
  }
};

exports.handleLogIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const match = await bcrypt.compare(password, existingUser.password);

      if (match) {
        const token = await jwt.sign(
          { ...existingUser },
          process.env.JWT_SECRET,
          { expiresIn: process.env.JWT_EXPIRY * 24 * 60 * 60 * 1000 }
        );
        res.status(200).json({
          message: "LogIn Successfull",
          token,
        });
      } else {
        res.status(400).json({
          message: "Incorrect Password...",
        });
      }
    } else {
      res.status(400).json({
        message: "User does not exists Please Register",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An Error Occured",
      error,
    });
  }
};
