import db from '../../index.js';

export const getBill = async (req, res) => {
    const  username = req.params.username;
    const q = "SELECT * FROM hoadon hd, cthd WHERE hd.MaHD = cthd.MaHD and hd.MaKH = (SELECT tk.IdUser FROM taikhoan tk WHERE tk.UserName = ?)  " +
    "GROUP BY hd.MaHD, hd.TongTien, hd.TrangThai, hd.ThoiGianNhanDon, hd.DiaChi, hd.Sdt";
    db.query(q, [username], (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching address');
        } else {
          res.json(data);
        }
    });
}

export const getDetailedBill = async (req, res) => {
    const  maHD = req.params.maHD;
    const q = "SELECT cthd.*, ma.TenMA, ma.GiaTien FROM cthd, monan ma WHERE ma.MaMA = cthd.MaMA AND cthd.MaHD = ?";
    db.query(q, [maHD], (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching address');
        } else {
          res.json(data);
        }
    });
}

export const insertBill = (req,res) => {
  const {MaHD, TongTien, MaKH, MaCollaborator, Day, DiaChi, Sdt} = req.body
  console.log('đang insert bill: ' + MaHD, TongTien, MaKH, MaCollaborator, Day, DiaChi, Sdt)
  const q = "INSERT INTO `hoadon`(`MaHD`, `TongTien`, `TrangThai`, `MaKH`, `MaCollaborator`, `ThoiGianNhanDon`, `DiaChi`, `Sdt`) VALUES "+
  "(?,?,'pending',?,?,?,?,?)"

  db.query(q, [MaHD, TongTien, MaKH, MaCollaborator, Day, DiaChi, Sdt],(err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error insert bill...' });
    }
    return res.status(200).json({ success: true, message: 'insert bill successfuly...' })
  })
}

export const insertBillDetails = (req,res) => {
  const {MaHD, MaMA, SL, GiaTien} = req.body
  console.log('đang insert billdetail: ' + MaHD, MaMA, SL, GiaTien)
  const q = "INSERT INTO `cthd`(`MaHD`, `MaMA`, `SL`, `GiaTien`) VALUES (?,?,?,?)"

  db.query(q, [MaHD, MaMA, SL, GiaTien],(err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error insert bill...' });
    }
    return res.status(200).json({ success: true, message: 'insert bill successfuly...' })
  })
}


export const getCoutBill = (req,res) => {
  const q = "SELECT COUNT(*) as count FROM `hoadon`";
  db.query(q, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error fetching address');
      } else {
        res.json(data);
      }
  });
}
