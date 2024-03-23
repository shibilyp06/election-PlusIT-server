const express = require("express");
const router = express.Router()

const {postSignup} = require("../controllers/userController")
router.post("/register" , postSignup)

module.exports = router