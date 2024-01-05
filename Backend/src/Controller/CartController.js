import db from '../../index.js';

export const getCart = async (req, res) => {
    const  username = req.params.username;
    const  day = req.params.day;
    const  time = req.params.time;
    console.log(day + time)
    const q = "(SELECT ma.MaMA, ma.TenMA, ma.GiaTien, (ma.GiaTien - ctgg.SoTienGiam) as GiaTien_New, "+
    "gh.MaGH, gh.MaUser, ctgh.SL, a.Url, ma.SL as SLMA, ctgg.SL as SLGG FROM giohang gh, ctgh, taikhoan tk, monan ma, "+
    "giamgia gg, anhmonan a, ctgg WHERE gh.MaUser = tk.IdUser AND tk.UserName = ? AND gh.MaGH = ctgh.MaGH and ctgh.MaMA = ma.MaMA and ma.MaMA = a.MaMA and a.ViewPost = 1 and "+
    "ctgg.MaMA = ma.MaMA and ctgg.MaGiamGia = gg.MaGiamGia and gg.NgayGiamGia = ? and gg.GioBatDau <= ? and gg.GioKetThuc >= ?) UNION " +
    "(SELECT ma.MaMA, ma.TenMA, ma.GiaTien, ma.GiaTien GiaTien_New, gh.MaGH, gh.MaUser, ctgh.SL, a.Url, "+
    "ma.SL as SLMA, 0 as SLGG FROM giohang gh, ctgh, taikhoan tk, monan ma, anhmonan a WHERE gh.MaUser = tk.IdUser AND "+
    "tk.UserName = 'tranvanson' AND gh.MaGH = ctgh.MaGH and ctgh.MaMA = ma.MaMA and ma.MaMA = a.MaMA and a.ViewPost = 1 "+
    "and ma.MaMA NOT IN (SELECT ctgg.MaMA FROM giamgia gg, ctgg WHERE gg.MaGiamGia = ctgg.MaGiamGia and "+
    "gg.NgayGiamGia = ? and gg.GioBatDau <= ? and gg.GioKetThuc >= ?))"
    // const q = "((SELECT ma.MaMA, ma.TenMA, a.Url, (ma.GiaTien - gg.SoTienGiam) as GiaTien_New from monan ma, anhmonan a, giamgia gg WHERE ma.MaMA = a.MaMA and gg.MaMA = ma.MaMA and a.ViewPost = 1) UNION (SELECT ma.MaMA, ma.TenMA, a.Url, ma.GiaTien as GiaTien_New from monan ma, anhmonan a, giamgia gg WHERE ma.MaMA = a.MaMA and a.ViewPost = 1 and ma.MaMA NOT IN (SELECT gg.MaMA FROM giamgia gg)))"
    db.query(q, [username, day, time, time, day, time, time], (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching address');
        } else {
          res.json(data);
        }
    });
}


export const postDeleteCart = (req,res) => {
    const {maMA, username} = req.body
    // console.log('thông tin delete: '+ maKH + text + province + numericValue)
    const q = "DELETE FROM ctgh WHERE ctgh.MaMA = ? and ctgh.MaGH = (SELECT gh.MaGH FROM giohang gh, taikhoan tk WHERE tk.IdUser = gh.MaUser and tk.UserName = ?)"
  
    db.query(q, [maMA, username],(err, result) => {
      if(err){
        res.status(500).send('Error delete address...')
      }
      res.status(200).send('Delete address successfuly ...')
    })
}

export const postUpdateCart = (req,res) => {
    const {maMA, username, SL, GiaTien} = req.body
    // console.log('thông tin delete: '+ maKH + text + province + numericValue)
    const q = "UPDATE ctgh SET SL=?, GiaTien=? WHERE ctgh.MaMA = ? and ctgh.MaGH = (SELECT gh.MaGH FROM giohang gh, taikhoan tk WHERE tk.IdUser = gh.MaUser and tk.UserName = ?)"
  
    db.query(q, [SL, GiaTien, maMA, username],(err, result) => {
      if(err){
        res.status(500).send('Error delete address...')
      }
      res.status(200).send('Delete address successfuly ...')
    })
}

export const getPayment = async (req, res) => {
    const  username = req.params.username;
    const q = "SELECT gh.TongTien FROM giohang gh, taikhoan tk WHERE gh.MaUser = tk.IdUser and tk.UserName = ?";
    db.query(q, [username], (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching address');
        } else {
          res.json(data);
        }
    });
}

export const postUpdatePriceCart = (req,res) => {
  const {sum, note, username} = req.body
  console.log('thông tin update: '+ note)
  const q = "UPDATE `giohang` SET `TongTien`= ?, `GhiChu` = ? WHERE giohang.MaUser = (SELECT tk.IdUser FROM taikhoan tk WHERE tk.UserName = ?)"

  db.query(q, [sum, note, username],(err, result) => {
    if(err){
      res.status(500).send('Error delete address...')
    }
    res.status(200).send('Delete address successfuly ...')
  })
}
