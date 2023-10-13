const jwt = require("jsonwebtoken");
exports.validUserCheck = async (req, res, next) => {
  const token = req.headers?.authorization.split(" ")[1];
  try {
    const user = await jwt.verify(token, process.env.JWT_SECRET, {
      ignoreExpiration: true,
    });
    if (user) {
      next();
    }
  } catch (error) {
    res.status(403).json({
      message: "Invalid Credentails",
    });
  }
};
