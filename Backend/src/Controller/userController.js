import db from '../../index.js';

export const getAllUserID = (req, res) => {
    const q = 'SELECT IdUser FROM taikhoan';
    db.query(q, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error fetching user IDs');
      } else {
        const userIds = rows.map(row => row.IdUser);
        // console.log(userIds);
        res.json(userIds);
      }
    });
};

export const getUserId = (req, res) => {
  const  username = req.params.username;
  const q = 'SELECT IdUser FROM taikhoan WHERE userName = ?';
  db.query(q, [username], (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching userId');
    } else {
      res.json(data);
    }
});
};
  