import express from 'express'
import { getFoodCount, getImageCount, saveFood, selectFoodMains, selectFoodSales, selectFoodDesserts, selectFoodDesserts_Sale, selectFoodMains_Sale } from '../Controller/foodController.js'

export const foodRouter = express.Router()

foodRouter.post('/createfood', saveFood)