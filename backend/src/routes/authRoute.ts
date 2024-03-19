import express from "express"
import { Controllers } from "../controllers"

const router = express.Router()

router.post("/login", Controllers.loginUser)
router.post("/register-user", Controllers.registerUser)

export default router
