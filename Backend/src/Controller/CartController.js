import db from '../../index.js';

export const getCart = async (req, res) => {
    const  username = req.params.username;
    const q = "(select ma.MaMA, ma.TenMA, (ma.GiaTien - gg.SoTienGiam) as GiaTien_New, gh.MaGH, gh.MaUser, ctgh.SL, a.Url from giohang gh, ctgh, taikhoan tk, monan ma, giamgia gg,anhmonan a "+
    "WHERE gh.MaGH = ctgh.MaGH and ctgh.MaMA = ma.MaMA and tk.IdUser = gh.MaUser and tk.UserName = 'tranvanson' and gg.MaMA = ma.MaMA and a.ViewPost = 1 and ma.MaMA = a.MaMA) "+
    "UNION (select ma.MaMA, ma.TenMA, (ma.GiaTien) as GiaTien_New, gh.MaGH, gh.MaUser, ctgh.SL, a.Url from giohang gh, ctgh, taikhoan tk, monan ma, anhmonan a "+
    "WHERE gh.MaGH = ctgh.MaGH and ctgh.MaMA = ma.MaMA and tk.IdUser = gh.MaUser and tk.UserName = 'tranvanson' and ma.MaMA NOT IN (SELECT gg.MaMA FROM giamgia gg) and a.ViewPost = 1 and ma.MaMA = a.MaMA)";

    // const q = "((SELECT ma.MaMA, ma.TenMA, a.Url, (ma.GiaTien - gg.SoTienGiam) as GiaTien_New from monan ma, anhmonan a, giamgia gg WHERE ma.MaMA = a.MaMA and gg.MaMA = ma.MaMA and a.ViewPost = 1) UNION (SELECT ma.MaMA, ma.TenMA, a.Url, ma.GiaTien as GiaTien_New from monan ma, anhmonan a, giamgia gg WHERE ma.MaMA = a.MaMA and a.ViewPost = 1 and ma.MaMA NOT IN (SELECT gg.MaMA FROM giamgia gg)))"
    db.query(q, [username], (err, data) => {
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
    const {maMA, username, SL} = req.body
    // console.log('thông tin delete: '+ maKH + text + province + numericValue)
    const q = "UPDATE ctgh SET SL=? WHERE ctgh.MaMA = ? and ctgh.MaGH = (SELECT gh.MaGH FROM giohang gh, taikhoan tk WHERE tk.IdUser = gh.MaUser and tk.UserName = ?)"
  
    db.query(q, [SL, maMA, username],(err, result) => {
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
