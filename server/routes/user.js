const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const{
    login,signup,checkUserExists 
}=require("../controllers/user.js")

const { auth } = require("../middleware/auth")

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************


// router for checking user already exist or not
router.post("/checkUserExists",checkUserExists)

// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)


