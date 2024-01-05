import express from 'express'
import {getInvoiceDataByID, getInvoiceIDByMaCollaborator, updateAcceptInvoice, updateDenytInvoice } from '../Controller/invoiceController.js'

export const invoiceRouter = express.Router()

invoiceRouter.get('/invoice/:macb', getInvoiceIDByMaCollaborator)

invoiceRouter.get('/invoiceid/:mahd', getInvoiceDataByID)

invoiceRouter.put('/update/invoiceaccept/:mahd', updateAcceptInvoice)
invoiceRouter.put('/update/invoicedeny/:mahd', updateDenytInvoice)