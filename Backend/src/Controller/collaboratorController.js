
import db from '../../index.js';

export const getCollaborator = async (req, res) => {
  const username = req.params.username;
  const q = "SELECT c.* FROM collaborator c, taikhoan tk WHERE c.MaCollaborator = tk.IdUser and tk.UserName = ?"
  // const q='select * FROM taikhoan';
  db.query(q, [username], (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching food mains');
    } else {
      res.json(data);
    }
  });
};

export const getAllCollabPending = async (req, res) => {
  const q = 'SELECT * FROM collaborator WHERE trangthai = "pending"'
  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching user count');
    }
    else {
      res.json(data);
    }
  })
}
export const getCountFoodPending = async (req, res) => {
  const macb = req.params.macb
  const q = `SELECT COUNT(*) AS foodpendingcount FROM monan, collaborator 
              WHERE monan.MaCollaborator = collaborator.MaCollaborator 
              AND monan.TrangThai = 'pending' 
              AND collaborator.MaCollaborator = ?`
  db.query(q, [macb], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching user count');
    } else {
      const foodpendingcount = rows[0].foodpendingcount;
      res.json({ foodpendingcount });
    }
  });
}
export const getCountFoodApprove = async (req, res) => {
  const macb = req.params.macb
  const q = `SELECT COUNT(*) AS foodapprovecount FROM monan, collaborator 
              WHERE monan.MaCollaborator = collaborator.MaCollaborator 
              AND monan.TrangThai = 'approve' 
              AND collaborator.MaCollaborator = ?`
  db.query(q, [macb], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching user count');
    } else {
      const foodapprovecount = rows[0].foodapprovecount;
      res.json({ foodapprovecount });
    }
  });
}
export const getCountDeny = async (req, res) => {
  const macb = req.params.macb
  const q = `SELECT COUNT(*) AS fooddenycount FROM monan, collaborator 
              WHERE monan.MaCollaborator = collaborator.MaCollaborator 
              AND monan.TrangThai = 'deny' 
              AND collaborator.MaCollaborator = ?`
  db.query(q, [macb], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching user count');
    } else {
      const fooddenycount = rows[0].fooddenycount;
      res.json({ fooddenycount });
    }
  });
}
export const postInsertCollaborator = (req, res) => {
  const { maKH, nameCollaborator, address, province, sdt, email } = req.body
  console.log('thông tin update: ' + '' + maKH + ' ' + nameCollaborator + ' ' + address + ' ' + province + ' ' + sdt + ' ' + email)
  const q1 = "INSERT INTO `collaborator`(`MaCollaborator`, `TenUser`, `DiaChi`, `TrangThai`, `Tinh`, `Sdt`, `Email`) VALUES (?,?,?,'pending',?,?,?)"

  db.query(q1, [maKH, nameCollaborator, address, province, sdt, email], (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error insert collaborator...' });
    }
    return res.status(200).json({ success: true, message: 'insert collaborator successfuly...' })
  })
}

export const getAllCollaboratorPending = async (req, res) => {
  // const q = 'SELECT * FROM collaborator c';
  // const trangthai = 'pending';
  // db.query(q, (err, data) => {
  //   if (err) {
  //     console.log('Get collaborator status has an error: ' + err);
  //     res.status(500).send('Had an error fetching collaborator status');
  //   } else {
  //     res.json(data);
  //   }
  // });
  // const q = 'SELECT COUNT(*) AS imageCount FROM anhmonan'
  // db.query(q, (err, rows) => {
  //     if (err) {
  //         console.error(err);
  //         res.status(500).send('Error fetching user count');
  //     } else {
  //         const imageCount = rows[0].imageCount;
  //         res.json({ imageCount });
  //     }
  // });
};

export const getCollaboratorDeny = async (req, res) => {
  const username = req.params.username;
  const q = "SELECT c.* FROM collaborator c, taikhoan tk WHERE c.MaCollaborator = tk.IdUser and tk.UserName = ? and c.TrangThai == 'deny'"
  // const q='select * FROM taikhoan';
  db.query(q, [username], (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching food mains');
    } else {
      res.json(data);
    }
  });
};

export const getCollaboratorPending = async (req, res) => {
  const username = req.params.username;
  const q = "SELECT c.* FROM collaborator c, taikhoan tk WHERE c.MaCollaborator = tk.IdUser and tk.UserName = ? and c.TrangThai == 'pending'"
  // const q='select * FROM taikhoan';
  db.query(q, [username], (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching food mains');
    } else {
      res.json(data);
    }
  });
};

