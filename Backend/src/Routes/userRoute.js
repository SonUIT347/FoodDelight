import express from 'express'
import { getAllUserID } from '../Controller/userController.js'

export const routerGetUserId = express.Router()

routerGetUserId.get('/getUserId', getAllUserID)