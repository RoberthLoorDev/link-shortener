import express from "express"
import { Controllers } from "../controllers"

const router = express.Router()

router.post("/createLinkShorter", Controllers.createLinkShorter)
router.get("/getClicks", Controllers.getClicks)
// router.get("/:shorterUrl", Controllers.redirectToUrl)

export default router
