import express from 'express'
import { saveFood, selectFoodMains, selectFoodSales, selectFoodDesserts, selectFoodDesserts_Sale, selectFoodMains_Sale } from '../Controller/foodController.js'
import { getFoodCount, getImageCount, saveFood } from '../Controller/foodController.js'

export const foodRouter = express.Router()

foodRouter.post('/createfood', saveFood)
foodRouter.get('/selectFoodMains', selectFoodMains)
foodRouter.get('/selectFoodDesserts', selectFoodDesserts)
foodRouter.get('/selectFoodSales', selectFoodSales)
foodRouter.get('/selectFoodMains_Sale', selectFoodMains_Sale)
foodRouter.get('/selectFoodDesserts_Sale', selectFoodDesserts_Sale)
foodRouter.get('/foodCount', getFoodCount)

foodRouter.get('/imageCount', getImageCount)
