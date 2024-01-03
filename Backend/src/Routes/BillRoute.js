import express from 'express'
import { getBill, getDetailedBill } from '../Controller/BillController.js'


export const getBillRouter = express.Router()


getBillRouter.get('/getBill/:username', getBill)
getBillRouter.get('/getDetailedBill/:maHD', getDetailedBill)
