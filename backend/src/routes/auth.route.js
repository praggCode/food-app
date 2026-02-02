const express = require('express');
const router = express.Router();

const authController = require("../controllers/auth.controller")

router.post("/user/register", authController.registerUser);
router.post("/user/login", authController.loginUser);
router.get("/user/logout", authController.logoutUser);

router.post("  ", authController.registerFoodpartner);
router.post("/food-partner/login", authController.loginFoodpartner);
router.get("/food-partner/logout", authController.logoutFoodpartner);

module.exports = router;