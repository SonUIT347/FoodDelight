import jwt from 'jsonwebtoken';
import db from '../../index.js';
const secretKey= 'fooddelight'
export const login = (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM taikhoan WHERE username = ? AND password = ?', [username, password], (error, rows, fields) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        if (rows.length > 0) {
            const user = rows[0]
            // console.log(user)
            const token = jwt.sign({ userId: user.id, username: user.username }, secretKey);
          // Authentication successful
          res.status(200).json({ user });
        } else {
          // Authentication failed
          res.status(401).json({ message: 'Invalid credentials' });
        }
      }
    });
}
export const register = (req,res) => {
  console.log('heeeeeee')
  const {username, password, role, IdUser} = req.body
  console.log(username)
  const q = 'INSERT INTO taikhoan (username, password,phanquyen, iduser) VALUES (?,?,?,?)'

  db.query(q, [username, password, role, IdUser],(err, result) => {
    if(err){
      res.status(500).send('Error regiter...')
    }
    res.status(200).send('Register successfuly ...')
  })
}
export const getUserCount = (req, res) => {
  const q = 'SELECT COUNT(*) AS userCount FROM taikhoan';
  db.query(q, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching user count');
    } else {
      // Extract userCount from the result and send it in the response
      const userCount = rows[0].userCount;
      res.json({ userCount });
    }
  });
};
