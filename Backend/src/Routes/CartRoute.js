import express from 'express'
import { getCart, postDeleteCart, postUpdateCart, getPayment, postUpdatePriceCart, getColabInCart, getCartDetailByMaCollab, getCheckSL, deleteCartByMaKH, getCheckCart, getIdCart, insertCartDetail } from '../Controller/CartController.js'

export const getCartRouter = express.Router()
export const deleteCartRouter = express.Router()
export const updateCartRouter = express.Router()
export const getPaymentRouter = express.Router()

getCartRouter.get('/cart/:username/:day/:time', getCart)
getCartRouter.get('/cart/:MaKH/:MaCollab', getCartDetailByMaCollab)
getCartRouter.get('/checkSL/:MaKH', getCheckSL)
getCartRouter.get('/checkCart/:username/:MaMA', getCheckCart)
getCartRouter.get('/getIdCart/:username', getIdCart)




deleteCartRouter.post('/DeleteCart', postDeleteCart)
deleteCartRouter.post('/DeleteCartByMaKH', deleteCartByMaKH)


updateCartRouter.post('/insertCartDetail', insertCartDetail)
updateCartRouter.post('/UpdateCart', postUpdateCart)

getPaymentRouter.get('/Pay/:username', getPayment)
updateCartRouter.post('/UpdatePriceCart', postUpdatePriceCart)
getCartRouter.get('/CollabInCart/:username', getColabInCart)

