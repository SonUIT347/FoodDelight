import express from 'express';

import mysql from 'mysql';
import bodyParser from 'body-parser';
import routerAccount from './src/Routes/loginRoute.js'; 

const app = express()

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

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
const secretKey = 'fooddelight';
db.connect((err) => {
    if(err) throw err;
    console.log('Connected Database...')
})
app.use(routerAccount)
app.get('/food', (req, res) => {
    db.query('select * from food', (error, rows, field) =>{
        if(error)
        console.log(error)
        else {
            res.send(rows)
        }
    })
})
export default db