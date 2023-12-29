import express from 'express'
import { getAllUserID, getUserId } from '../Controller/userController.js'
import { getFoodCount, getImageCount } from '../Controller/foodController.js'
import { getAllUserID } from '../Controller/userController.js'

export const routerGetUserId = express.Router()

routerGetUserId.get('/getUserId', getAllUserID)
routerGetUserId.get('/getUserId/:username', getUserId)

