var express = require('express')
var app = express();

var mysql = require('mysql')
var bodyParser = require('body-parser')

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    passwork:'',
    database:'fooddelight'
})

var server = app.listen(8080, () =>{
    // var host = server.address().address
    // var port = server.address().port
})
db.connect((err) => {
    if(err) throw err;
    console.log('Connected Database...')
})

app.get('/food', (req, res) => {
    con.query('select * from food', (error, rows, field) =>{
        if(error)
        console.log(error)
        else {
            res.send(rows)
        }
    })
})