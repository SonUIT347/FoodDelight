import express from 'express'
import { createCustomer } from '../Controller/customerController.js'


export const routerCreateCus = express.Router()

routerCreateCus.post('/createcus', createCustomer)