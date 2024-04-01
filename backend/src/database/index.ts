import { Config } from "../config"
import mongoose, { ConnectOptions } from "mongoose"
import session from "express-session"
import connectMongo from "connect-mongo"
import { Application } from "express"
import passport from "passport"

//sessions
const MongoStore = connectMongo.create({
    mongoUrl: Config.Mongo_Uri || "",
    collectionName: "sessions",
})

export const connectDB = async (app: Application) => {
    const mongoUri: string = Config.Mongo_Uri || ""
    const dbName: string = Config.Database || ""

    try {
        await mongoose.connect(mongoUri, {
            dbName: dbName,
        } as ConnectOptions)

        console.log("Database connection success")

        //express sessions configuration
        app.use(
            session({
                secret: Config.PassportKey,
                resave: false,
                saveUninitialized: true,
                store: MongoStore,
                cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
            })
        )
    } catch (error) {
        console.error(error)
    }
}
