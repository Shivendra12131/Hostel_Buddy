import express from  "express"
const router = express.Router()

import {
    login,signup,checkUserExists 
} from "../controllers/user.js"

import { auth } from "../middlewares/auth.js"


router.post("/checkUserExists",checkUserExists)

// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)

export default router;

