import "dotenv/config"

const passportKey = process.env.PASSPORT_KEY
if (!passportKey) throw new Error("Passport key does not exist")

export const Config = {
    Mongo_Uri: process.env.MONGODB_URI,
    Port: process.env.Port,
    Database: process.env.DATABSE,
    PassportKey: passportKey,
}

module.exports = { Config }
