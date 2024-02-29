import { Models } from "../models/index"
import { Request, Response } from "express"
import bcrypt from "bcrypt"

export const createUser = async (req: Request, res: Response) => {
    try {
        const { names, lastnames, email, password } = req.body
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        const newUser = new Models.UserModel({
            names,
            lastnames,
            email,
            password: hashedPassword,
        })

        await newUser.save()

        res.status(200).json({
            success: true,
            message: "User created",
            data: newUser,
        })

        //
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error creating user",
            error: error,
        })
    }
}
