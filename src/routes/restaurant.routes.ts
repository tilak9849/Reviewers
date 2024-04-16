/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express'
import reviewsRouter from'./review.routes'
import contactROuter from './contact.routes'
import * as RestroController from '../controllers/retaurant.controller'
import { validate } from '../utils/validate'
import { createRestro, updateRestroDto } from '../validators/create-restaurant.validators'
import { authenticateToken, is_admin } from '../middleware/authentication.middleware'
const route = express.Router()

route.use('/:id/reviews',reviewsRouter)
route.use('/:id/contacts',contactROuter)

route.get('/',  RestroController.findAll)
route.post('/',validate(createRestro), authenticateToken ,is_admin ,RestroController.postRestro)
route.patch('/:id',validate(updateRestroDto),authenticateToken, is_admin, RestroController.update)
route.delete('/:id',authenticateToken,is_admin, RestroController.remove)
route.get('/:id',authenticateToken,RestroController.Get)
export default route;

