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
            const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, { expiresIn: '3h' });
          // Authentication successful
          res.status(200).json({ token });
        } else {
          // Authentication failed
          res.status(401).json({ message: 'Invalid credentials' });
        }
      }
    });
}