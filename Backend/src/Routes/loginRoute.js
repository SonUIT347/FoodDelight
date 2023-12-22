import express from 'express';
import { login } from '../Controller/loginControler.js';

const routerAccount = express.Router()

routerAccount.post('/login', login)


export default routerAccount