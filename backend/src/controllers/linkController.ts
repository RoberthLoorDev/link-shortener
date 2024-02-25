import { Request, Response } from "express"
import { LinkModel } from "../models/linkModel"
import { Utils } from "../utils"

export const createLinkShorter = async (req: Request, res: Response) => {
    try {
        const { originalLink } = req.body

        const formattedLink = Utils.formatOriginalUrl(originalLink)
        const randomUrl = characterGenerator()

        const protocol = req.protocol
        const hostname = req.hostname

        const shorterURL = `${protocol}://${hostname}:5000/${formattedLink}${randomUrl}`

        const newLink = new LinkModel({
            originalLink,
            shorterLink: shorterURL,
        })

        await newLink.save()

        res.status(200).json({
            success: true,
            message: "Link created",
            data: newLink,
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: "Error creating link",
            error: error,
        })
    }
}

export const redirectToUrl = async (req: Request, res: Response) => {
    try {
        const { shorterUrl } = req.params //vrclPcU
        const shorterURL = `${req.protocol}://${req.hostname}:5000/${shorterUrl}`

        const linkDataExist = await LinkModel.findOne({
            shorterLink: shorterURL,
        })

        const originalLinkExist = linkDataExist?.originalLink

        if (originalLinkExist) res.redirect(originalLinkExist)
    } catch (error) {
        console.error(error)

        res.status(400).json({
            success: false,
            message: "Error when searching link",
            error: error,
        })
    }
}

const characterGenerator = () => {
    //create shorter link
    const stringCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let randomUrl = ""

    for (let i = 0; i < 3; i++) {
        const randomIndice = Math.floor(Math.random() * stringCharacters.length)
        randomUrl = randomUrl + stringCharacters.charAt(randomIndice)
        console.log(randomUrl)
    }

    return randomUrl
}
