import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local"
import bcrypt from "bcrypt"
import { Models } from "../models"

const userModel = Models.UserModel

passport.use(
    new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
        try {
            const user = await userModel.findOne({ email })
            if (!user) {
                return done(null, false, { message: "User not found" })
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if (isMatch) {
                return done(null, user)
            } else {
                return done(null, false, { message: "Incorrect password" })
            }
        } catch (error) {
            return done(error)
        }
    })
)
passport.serializeUser((user: any, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id: any, done) => {
    try {
        const user = await userModel.findById(id)
        done(null, user)
    } catch (error) {
        done(error)
    }
})

export default passport
