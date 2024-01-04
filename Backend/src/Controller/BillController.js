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