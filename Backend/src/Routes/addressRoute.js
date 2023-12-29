import express from 'express'
import { getAddress, postNewAddress, postDeleteAddress, postUpdateAddress, postUpdateValue0Address, postUpdateValue1Address, getAddressSelected } from '../Controller/addressController.js'

export const addressRoute = express.Router()
export const insertAddressRouter = express.Router()
export const deleteAddressRouter = express.Router()
export const updateAddressRouter = express.Router()
export const updateValueAddressRouter = express.Router()
export const getAddressSelectedRouter = express.Router()

insertAddressRouter.get('/address/:username', getAddress)
addressRoute.post('/InsertAddress', postNewAddress)
deleteAddressRouter.post('/DeleteAddress', postDeleteAddress)
updateAddressRouter.post('/UpdateAddress', postUpdateAddress)
updateValueAddressRouter.post('/UpdateValue1Address', postUpdateValue1Address)
updateValueAddressRouter.post('/UpdateValue0Address', postUpdateValue0Address)

getAddressSelectedRouter.get('/AddressSelected/:username', getAddressSelected)