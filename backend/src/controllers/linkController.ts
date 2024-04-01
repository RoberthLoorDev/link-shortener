import { Request, Response } from "express"
import { LinkModel } from "../models/linkModel"
import { Utils } from "../utils"
import { link } from "fs"

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
        const { shorterUrl } = req.params

        const shorterURL = `${req.protocol}://${req.hostname}/${shorterUrl}`

        const linkDataExist = await LinkModel.findOne({
            shorterLink: shorterURL,
        })

        if (!linkDataExist) {
            return res.status(404).json({
                success: false,
                message: "Link not found",
            })
        }

        linkDataExist.clicks++
        await linkDataExist.save()

        res.redirect(linkDataExist.originalLink)
    } catch (error) {
        console.error(error)

        res.status(400).json({
            success: false,
            message: "Error when searching link",
            error: error,
        })
    }
}

export const getClicks = async (req: Request, res: Response) => {
    try {
        const links = await LinkModel.find()

        const clicksArray = links.map((link) => ({
            shorterLink: link.shorterLink,
            clicks: link.clicks,
        }))

        res.status(200).json({
            success: true,
            message: "Links found",
            data: clicksArray,
        })
    } catch (error) {
        console.error(error)

        res.status(400).json({
            success: false,
            message: "Error when searching links",
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
    }

    return randomUrl
}
