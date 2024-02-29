import { Router } from "express"
import LinkRoute from "./linkRoute"
import UserRoute from "./userRoutes"
import AuthRoute from "./authRoute"

const router = Router()

const defaultRoutes = [
    {
        path: "/link",
        route: LinkRoute,
    },
    {
        path: "/user",
        route: UserRoute,
    },
    {
        path: "/auth",
        route: AuthRoute,
    },
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

export default router
