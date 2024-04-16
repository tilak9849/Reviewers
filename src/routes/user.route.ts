import express  from "express"
import * as UserController from '../controllers/user.controller'
import { validate } from '../utils/validate'
import { createRestro } from '../validators/create-restaurant.validators'
import { createUserDto, createUserDtobody } from "../validators/create-user.validator"
// import { authenticateRefreshToken, is_admin } from "../middleware/authentication.middleware"
const route = express.Router()



route.post('/signup',validate(createUserDto), UserController.createUser)
route.post('/login', UserController.login)
// route.post('/refresh',authenticateRefreshToken, UserController.refresh)
route.delete('/:id', UserController.remove)

export default route;
