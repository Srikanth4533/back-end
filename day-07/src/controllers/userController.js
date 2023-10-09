const User = require("../models/user");

exports.handleCreateUser = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email: email });

  if (existingUser?._id) {
    return res.status(500).json({
      message: "User Already Exist Please Login",
    });
  }

  if (!name || !email || !password) {
    return res.status(500).json({
      status: "failed",
      message: "Please Enter All The Details",
    });
  }

  const user = await User.create({ name, email, password });

  return res.status(201).json({
    status: "success",
    message: "User Created Successfully..",
    data: user,
  });
};
