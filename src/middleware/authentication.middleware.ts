
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'

export function authenticateToken(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Extract the token from the request headers
    const token =
        req.headers.authorization && req.headers.authorization.split(' ')[1]
    // console.log('token', token, req.body)
    if (!token) {
        return res
            .status(401)
            .json({ success: false, message: 'Missing authentication token' })
    }

    try {
        // console.log('this is fine, line 22', process.env.ACCESS_TOKEN_KEY, token)
        // Verify and decode the token
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_KEY = "random-secret-hey")
        // console.log('but not here right?')
        // Attach the decoded token to the request object
        // @ts-ignore
        req.user = decodedToken

        next() // Proceed to the next middleware or route handler
    } catch (error) {
        console.log('line 23 crashed', error)
        return res
            .status(403)
            .json({ success: false, message: 'Invalid authentication token' })
    }
}

// export function authenticateRefreshToken(
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) {
//     // Extract the token from the request headers
//     const token =
//         req.cookies.refreshToken && req.cookies.refreshToken.split(' ')[1]

//     if (!token) {
//         return res
//             .status(401)
//             .json({ success: false, message: 'Missing authentication token' })
//     }


//     try {
//         // Verify and decode the token
//         const decodedToken = jwt.verify(token, process.env.REFRESH_TOKEN_KEY as string)
//         // Attach the decoded token to the request object
//         // @ts-ignore
//         req.user = decodedToken

//         next() // Proceed to the next middleware or route handler
//     } catch (error) {
//         return res
//             .status(403)
//             .json({ success: false, message: 'Invalid authentication token' })
//     }
// }


export function is_admin(req: Request, res: Response, next: NextFunction) {
    // @ts-ignore
    const { user }: { user: any } = req

    if (user && user.is_admin) {
        next() // Proceed to the next middleware or route handler
    } else {
        return res.status(403).json({
            success: false,
            message: 'Unauthorized: User is not an admin',
        })
    }
}