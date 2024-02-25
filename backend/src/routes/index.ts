import { Router } from "express"
import LinkRoute from "./linkRoute"

const router = Router()

const defaultRoutes = [
    {
        path: "/link",
        route: LinkRoute,
    },
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

export default router
