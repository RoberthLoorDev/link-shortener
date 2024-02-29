import { Router } from "express"
import { Controllers } from "../controllers"

const router = Router()

router.post("/create", Controllers.createUser)

export default router
