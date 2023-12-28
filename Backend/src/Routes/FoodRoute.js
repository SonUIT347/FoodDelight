import express from 'express'
import { getFoodCount, getImageCount, saveFood } from '../Controller/foodController.js'

export const foodRouter = express.Router()

foodRouter.post('/createfood', saveFood)
foodRouter.get('/foodCount', getFoodCount)

foodRouter.get('/imageCount', getImageCount)