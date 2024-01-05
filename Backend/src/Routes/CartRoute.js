import express from 'express'
import { getCart, postDeleteCart, postUpdateCart, getPayment, postUpdatePriceCart } from '../Controller/CartController.js'

export const getCartRouter = express.Router()
export const deleteCartRouter = express.Router()
export const updateCartRouter = express.Router()
export const getPaymentRouter = express.Router()

getCartRouter.get('/cart/:username/:day/:time', getCart)
deleteCartRouter.post('/DeleteCart', postDeleteCart)
updateCartRouter.post('/UpdateCart', postUpdateCart)
getPaymentRouter.get('/Pay/:username', getPayment)
updateCartRouter.post('/UpdatePriceCart', postUpdatePriceCart)

