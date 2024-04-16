/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from 'express'
// import { getAll } from '../controllers/todo.controller'
import * as ContactController from '../controllers/contact.controllers'
import { validate } from '../utils/validate'

import { authenticateToken, is_admin } from '../middleware/authentication.middleware'
import { createContactDto, updateContactDto } from '../validators/create-contact.validator'

const route = express.Router({ mergeParams: true})


route.post('/', validate(createContactDto), authenticateToken, is_admin, ContactController.createContact)

route.delete('/', authenticateToken, is_admin, ContactController.remove)

route.patch('/',validate(updateContactDto), authenticateToken, is_admin, ContactController.update)


export default route;