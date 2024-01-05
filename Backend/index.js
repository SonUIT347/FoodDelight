import express from 'express';
import cors from 'cors'
import mysql from 'mysql';
import bodyParser from 'body-parser';
import { registerAccount, routerAccount, routerGetUserCount } from './src/Routes/loginRoute.js';
import { routerGetUserId } from './src/Routes/userRoute.js';
import { routerCreateCus } from './src/Routes/customerRoute.js';
import { foodRouter } from './src/Routes/FoodRoute.js';
import { addressRoute, deleteAddressRouter, getAddressSelectedRouter, insertAddressRouter, updateAddressRouter, updateValueAddressRouter } from './src/Routes/addressRoute.js';
import { deleteCartRouter, getCartRouter, getPaymentRouter, updateCartRouter } from './src/Routes/CartRoute.js';
import { postInsertCollaborator } from './src/Controller/collaboratorController.js';
import { getAllCollabRouter, getAllCollaborator, getCollaboratorRouter, insertCollaboratorRouter } from './src/Routes/collaboratorRoute.js';
import { adminRoute } from './src/Routes/addminRoute.js';
// import { getCollaboratorRouter, insertCollaboratorRouter } from './src/Routes/collaboratorRoute.js';
import { getBillRouter, insertBillRouter } from './src/Routes/BillRoute.js';
// import { getBillRouter } from './src/Routes/BillRoute.js';
import { createSaleRouter, saleCountRouter } from './src/Routes/saleRoute.js';
import { invoiceRouter } from './src/Routes/invoiceRoute.js';
// import { getPayment } from './src/Controller/CartController.js';

const app = express()

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));
// app.use(cors)
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    passwork:'',
    database:'fooddelight'
})

const server = app.listen(8080, () =>{
    // var host = server.address().address
    // var port = server.address().port
})

// app.listen(8080,'172.17.9.17', () =>{
//     // var host = server.address().address
//     // var port = server.address().port
//     console.log("server running "+ 8080)
// })
db.connect((err) => {
    console.log(err)
    console.log('Connected Database...')
})

app.get('/data', (req, res)=>{
    var sql = "select * from taikhoan";
    db.query(sql, (err, kq)=>{
        if(err)
            throw err;
        console.log("afdadf" +kq);
        res.send(kq);
    })
})

app.use(routerAccount)
app.use(registerAccount)
app.use(routerGetUserCount)
app.use(routerGetUserId)
app.use(routerCreateCus)
app.use(foodRouter)
app.use(addressRoute)
app.use(insertAddressRouter)
app.use(deleteAddressRouter)
app.use(updateAddressRouter)
app.use(updateValueAddressRouter)
app.use(getCartRouter)
app.use(deleteCartRouter)
app.use(updateCartRouter)
app.use(getAddressSelectedRouter)
app.use(getPaymentRouter)
app.use(insertCollaboratorRouter)
app.use(getCollaboratorRouter)
app.use(adminRoute)
app.use(getAllCollaborator)
app.use(getAllCollabRouter)
app.use(getBillRouter)
app.use(insertBillRouter)

app.use(saleCountRouter)
app.use(createSaleRouter)
app.use(invoiceRouter)
// app.get('/food', (req, res) => {
//     db.query('select * from food', (error, rows, field) =>{
//         if(error)
//         console.log(error)
//         else {
//             res.send(rows)
//         }
//     })
// })
export default db