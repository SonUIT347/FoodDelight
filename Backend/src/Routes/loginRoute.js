import express from 'express';
import { getUserCount, login, register } from '../Controller/loginControler.js';

export const routerAccount = express.Router()

export const registerAccount = express.Router()
export const routerGetUserCount = express.Router()
routerAccount.post('/login:username', login)
registerAccount.post('/register', register)
routerGetUserCount.get('/usercount', getUserCount)
