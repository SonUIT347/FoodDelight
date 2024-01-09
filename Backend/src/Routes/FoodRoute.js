import express from 'express'

import { saveFood, selectFoodMains, selectFoodSnacks, selectFoodDesserts, selectFoodDesserts_Sale, selectFoodMains_Sale, getFoodPending, getFoodApprove, getFoodDeny, getFood, getFoodByCategories, getFoodByCategoriesTrangMieng, getFoodByCategoriesKhaiVi, getAllFoodPending } from '../Controller/foodController.js'
import { getFoodCount, getImageCount, getImageFood, getTypeFood } from '../Controller/foodController.js'


export const foodRouter = express.Router()

foodRouter.post('/createfood', saveFood)
foodRouter.get('/selectFoodMains/:day/:time', selectFoodMains)
foodRouter.get('/selectFoodDesserts/:day/:time', selectFoodDesserts)
foodRouter.get('/selectFoodSnacks/:day/:time', selectFoodSnacks)
foodRouter.get('/selectFoodMains_Sale/:day/:time', selectFoodMains_Sale)
foodRouter.get('/selectFoodDesserts_Sale/:day/:time', selectFoodDesserts_Sale)
foodRouter.get('/foodCount', getFoodCount)
foodRouter.get('/imageCount', getImageCount)
foodRouter.get('/foodpending/:macb', getFoodPending)
foodRouter.get('/allfoodpending', getAllFoodPending)



foodRouter.get('/foodapprove/:macb', getFoodApprove)
foodRouter.get('/fooddeny/:macb', getFoodDeny)
foodRouter.get('/getfoodbycategories/monchinh', getFoodByCategories)
foodRouter.get('/getfoodbycategories/trangmieng', getFoodByCategoriesTrangMieng)
foodRouter.get('/getfoodbycategories/khaivi', getFoodByCategoriesKhaiVi)
foodRouter.get('/getFood/:maMA', getFood)
foodRouter.get('/getImageFood/:maMA', getImageFood)
foodRouter.get('/getTypeFood/:maMA', getTypeFood)

