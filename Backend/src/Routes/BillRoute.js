import express from 'express'
import { getBill, getCoutBill, getDetailedBill, insertBill, insertBillDetails } from '../Controller/BillController.js'


export const getBillRouter = express.Router()
export const insertBillRouter = express.Router()


getBillRouter.get('/getBill/:username', getBill)
getBillRouter.get('/getDetailedBill/:maHD', getDetailedBill)
getBillRouter.get('/getCoutBill/', getCoutBill)
insertBillRouter.post('/insertBill/', insertBill)
insertBillRouter.post('/insertBillDetail', insertBillDetails)

