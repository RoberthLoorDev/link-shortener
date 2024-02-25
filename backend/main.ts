import express from "express"
import { connectDB } from "./src/database/index"
import Routes from "./src/routes"
import { Config } from "./src/config"
import { Controllers } from "./src/controllers"

export const app = express()
const port = Config.Port
app.use(express.json())
connectDB()

app.get("/:shorterUrl", Controllers.redirectToUrl)

app.use("/api", Routes)

app.listen(port, () => {
    return console.log(`servidor corriendo en el puerto ${port}`)
})
