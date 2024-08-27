import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local"
import bcrypt from "bcrypt"
import { Models } from "../models"
import { Request } from "express"

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

//register user passport
passport.use(
    "local-register",
    new LocalStrategy(
        {
            usernameField: "email",
            passReqToCallback: true,
        },

        async (req: Request, email: string, password: string, done: any) => {
            try {
                const userExist = await Models.UserModel.findOne({ email })

                if (userExist) {
                    return done(null, false, { message: "Email is already registered" })
                }

                const hashedPassword = await bcrypt.hash(password, 10)
                const newUser = await Models.UserModel.create({
                    names: req.body.names, // Obtener los nombres del cuerpo de la solicitud
                    lastnames: req.body.lastnames, // Obtener los apellidos del cuerpo de la solicitud
                    email,
                    password: hashedPassword,
                })

                return done(null, newUser)
            } catch (error) {
                return done(error)
            }
        }
    )
)

passport.deserializeUser(async (id: any, done) => {
    try {
        const user = await userModel.findById(id)
        done(null, user)
    } catch (error) {
        done(error)
    }
})

export default passport
