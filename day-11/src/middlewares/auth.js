const jwt = require("jsonwebtoken");
const User = require("../models/user");
exports.checkForValidUser = async (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];

    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET, {
        ignoreExpiration: true,
      });

      const user = await User.findOne({ _id: decoded.id });

      if (decoded) {
        req.user = user;
        next();
      }
    } catch (error) {
      res.status(403).json({
        message: "UnAuthorized",
      });
    }
  } else {
    res.status(403).json({
      message: "Request Headers Are Required..!",
    });
  }
};
