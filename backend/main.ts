import express from "express"
import { connectDB } from "./src/database/index"
import Routes from "./src/routes"
import { Config } from "./src/config"
import passport from "./src/config/passportConfig"
import sessions from "express-session"
import cors from "cors"
import { redirectToUrl } from "./src/controllers/linkController"

const app = express()

const port = Config.Port

app.use(express.json())
connectDB()
app.use(cors())
// app.use(
//     sessions({
//         secret: Config.PassportKey,
//         resave: false,
//         saveUninitialized: false,
//     })
// )
// app.use(passport.initialize())
// app.use(passport.session())
app.use("/api", Routes)
app.get("/:shorterUrl", redirectToUrl)

app.listen(port, () => {
    return console.log(`server running on port ${port}`)
})

export default function main() {
    return app
}
