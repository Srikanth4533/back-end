const jwt = require("jsonwebtoken");
exports.checkForValidUser = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET, {
      ignoreExpiration: true,
    });
    if (decoded) {
      next();
    }
  } catch (error) {
    res.status(403).json({
      message: "UnAuthorized",
    });
  }
};
