import "dotenv/config";

export const Config = {
    Mongo_Uri: process.env.MONGODB_URI,
    Port: process.env.Port,
    Database: process.env.DATABSE,
};

module.exports = { Config };
