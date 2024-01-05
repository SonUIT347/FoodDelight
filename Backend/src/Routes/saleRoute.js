import express from 'express'
import { getCountSale, saveCtgg, saveSale } from '../Controller/SaleController.js'


export const saleCountRouter = express.Router()
export const createSaleRouter = express.Router()

saleCountRouter.get('/salecount', getCountSale)
createSaleRouter.post('/createsale', saveSale)
createSaleRouter.post('/createctgg', saveCtgg)
