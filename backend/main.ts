import express from "express"
import { connectDB } from "./src/database/index"
import Routes from "./src/routes"
import { Config } from "./src/config"
import passport from "./src/config/passportConfig"
import sessions from "express-session"

export const app = express()
const port = Config.Port
app.use(express.json())
connectDB()

app.use(
    sessions({
        secret: "SDIAKUFBJO84723T",
        resave: false,
        saveUninitialized: false,
    })
)

app.use(passport.initialize())
app.use(passport.session())

app.use("/api", Routes)

app.listen(port, () => {
    return console.log(`servidor corriendo en el puerto ${port}`)
})
