const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided.",
    });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decode);

    req.user = decode;
    next();
  } catch (error) {
    console.log(error);

    res.status(400).json({ success: false, message: "Invalid token" });
  }
};
