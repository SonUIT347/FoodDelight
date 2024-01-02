import express from 'express'
import { saveFood, selectFoodMains, selectFoodSales, selectFoodDesserts, selectFoodDesserts_Sale, selectFoodMains_Sale, getFoodPending, getFoodApprove, getFoodDeny, getFood } from '../Controller/foodController.js'
import { getFoodCount, getImageCount } from '../Controller/foodController.js'

export const foodRouter = express.Router()

foodRouter.post('/createfood', saveFood)
foodRouter.get('/selectFoodMains', selectFoodMains)
foodRouter.get('/selectFoodDesserts', selectFoodDesserts)
foodRouter.get('/selectFoodSales', selectFoodSales)
foodRouter.get('/selectFoodMains_Sale', selectFoodMains_Sale)
foodRouter.get('/selectFoodDesserts_Sale', selectFoodDesserts_Sale)
foodRouter.get('/foodCount', getFoodCount)
foodRouter.get('/imageCount', getImageCount)
foodRouter.get('/foodpending/:macb', getFoodPending)
foodRouter.get('/foodapprove/:macb', getFoodApprove)
foodRouter.get('/fooddeny/:macb', getFoodDeny)
foodRouter.get('/getFood/:maMA', getFood)
