const express = require('express')
const app = express();
const jwt = require('jsonwebtoken');
const mysql = require('mysql')
const bodyParser = require('body-parser')

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
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM account WHERE username = ? AND password = ?', [username, password], (error, rows, fields) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        if (rows.length > 0) {
            const user = rows[0]
            const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
          // Authentication successful
          res.status(200).json({ token });
        } else {
          // Authentication failed
          res.status(401).json({ message: 'Invalid credentials' });
        }
      }
    });
  });
app.get('/food', (req, res) => {
    db.query('select * from food', (error, rows, field) =>{
        if(error)
        console.log(error)
        else {
            res.send(rows)
        }
    })
})