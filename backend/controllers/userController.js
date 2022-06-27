const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc Register User
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (request, response) => {
  const { sEmail, sUsername, sPassword } = request.body;

  if (!sEmail || !sUsername || !sPassword) {
    response.status(400);
    throw new Error("Please add all fields");
  }

  //Check if user is already registered
  const userExists = await User.findOne({ sEmail });
  if (userExists) {
    response.status(400);
    throw new Error("User already registered");
  }

  //Salt and hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(sPassword, salt);
  const user = await User.create({
    sEmail,
    sUsername,
    sPassword: hashedPassword,
  });

  //Check if created
  if (user) {
    response.status(201).json({
      _id: user.id,
      sUsername: user.sUsername,
      sEmail: user.sEmail,
      token: generateJwt(user._id),
    });
  } else {
    response.status(400);
    throw new Error("Invalid User Data");
  }
});

//@desc Authenticate user
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (request, response) => {
  const { sEmail, sPassword } = request.body;

  //Check for user
  const user = await User.findOne({ sEmail });
  if (user && (await bcrypt.compare(sPassword, user.sPassword))) {
    response.json({
      _id: user.id,
      sUsername: user.sUsername,
      sEmail: user.sEmail,
      token: generateJwt(user._id),
    });
  } else {
    response.status(400);
    throw new Error("Invalid Username and Password");
  }
});

//@desc Get User Data
//@route UPDATE /api/users/user
//@access Private
const getUser = asyncHandler(async (request, response) => {
  const { _id, sUsername, sEmail } = await User.findById(request.user.id);
  response.status(200).json({ _id: _id, sUsername: sUsername, sEmail: sEmail });
});

//Generate JWT
const generateJwt = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
