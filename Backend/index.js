import express from 'express';
import cors from 'cors'
import mysql from 'mysql';
import bodyParser from 'body-parser';
import { registerAccount, routerAccount, routerGetUserCount } from './src/Routes/loginRoute.js';
import { routerGetUserId } from './src/Routes/userRoute.js';
import { routerCreateCus } from './src/Routes/customerRoute.js';
import { foodRouter } from './src/Routes/FoodRoute.js';

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