import express from "express"
import { configureSessions, connectDB } from "./src/database/index"
import Routes from "./src/routes"
import { Config } from "./src/config"
import passport from "./src/config/passportConfig"
import cors from "cors"
import { redirectToUrl } from "./src/controllers/linkController"

const app = express()

const port = Config.Port

app.use(express.json())
connectDB()

configureSessions(app)

app.use(cors())

app.use(passport.initialize())
app.use(passport.session())

app.use("/api", Routes)
app.get("/:shorterUrl", redirectToUrl)

app.get("/", (req, res) => {
    res.send("<h1>Hola mundo</h1>")
})

app.listen(5000, () => {})
