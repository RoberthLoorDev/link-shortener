import { createLinkShorter, redirectToUrl, getClicks } from "./linkController"
import { createUser } from "./userController"
import { loginUser, registerUser } from "./authController"

export const Controllers = {
    createLinkShorter,
    redirectToUrl,
    createUser,
    loginUser,
    registerUser,
    getClicks,
}
