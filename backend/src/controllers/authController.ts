import { Response, Request, NextFunction } from "express"
import passport from "passport"

export const loginUser = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("local", (error: Error, user: any, info: any) => {
        if (error) {
            return next(error)
        }

        if (!user) {
            return res.status(404).json({ success: false, message: info.message })
        }

        req.logIn(user, (error) => {
            if (error) {
                return next(error)
            }

            return res.status(200).json({
                success: true,
                message: "Logged in user",
                data: user,
            })
        })
    })(req, res, next)
}

export const registerUser = (req: Request, res: Response) => {}
