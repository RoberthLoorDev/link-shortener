import { Config } from "../config"
import mongoose, { ConnectOptions } from "mongoose"

export const connectDB = async () => {
    const mongoUri: string = Config.Mongo_Uri || ""
    const dbName: string = Config.Database || ""

    try {
        await mongoose.connect(mongoUri, {
            dbName: dbName,
        } as ConnectOptions)

        console.log("Database connection success")
    } catch (error) {
        console.log(error)
    }
}
