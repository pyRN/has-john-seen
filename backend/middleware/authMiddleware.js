const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (request, response, next) => {
  let token;

  //When checking for token, token is in headers under 'Bearer SPACE token-hash'
  if (
    request.headers.authorization &&
    request.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get token from the header
      token = request.headers.authorization.split(" ")[1];

      //Verify toke
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //Get user id from token and assign it to user
      request.user = await User.findById(decoded.id).select("-sPassword");
      next();
    } catch (error) {
      console.log(error);
      response.status(401);
      throw new Error("Not Authorized");
    }
  }
  //If no toke, user not authorized
  if (!token) {
    response.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
