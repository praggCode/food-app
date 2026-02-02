const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
    const { fullName, email, password } = req.body;

    if (!email || !password || !fullName) {
      return res.status(400).json({ message: "fullName, email and password are required" });
    }

    const normalizedEmail = String(email).trim().toLowerCase();

    const existingUser = await userModel.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      fullName: fullName,
      email: normalizedEmail,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id },process.env.JWT_SECRET);

    res.cookie("token", token);
    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      },
    });
}

async function loginUser(req, res) {
    const {email, password} =  req.body;

    if (!email || !password) {
      return  res.status(400).json({ message: "Email and password are required" });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const existingUser = await userModel.findOne({ email: normalizedEmail });
    if (!existingUser){
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET);

    res.cookie("token", token);
    res.status(200).json({
      message: "User logged in successfully",
      user: {
        _id: existingUser._id,
        fullName: existingUser.fullName,
        email: existingUser.email,
      },
    });
}

async function logoutUser(req, res) {
    res.clearCookie("token");
    res.status(200).json({ message: "User logged out successfully" });
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
