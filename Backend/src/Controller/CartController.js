import db from '../../index.js';

export const getCart = async (req, res) => {
    const  username = req.params.username;
    const  day = req.params.day;
    const  time = req.params.time;
    console.log(day + time)
    const q = "SELECT ma.*, a.Url, ctgh.SL as SLGH FROM taikhoan tk, giohang gh, ctgh, monan ma, anhmonan a WHERE tk.IdUser = gh.MaUser and ctgh.MaGH = gh.MaGH and "+
    "ma.MaMA = ctgh.MaMA and a.MaMA = ma.MaMA and a.ViewPost = 1 and tk.UserName = ?"
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

export const getColabInCart = async (req, res) => {
  const  username = req.params.username;
  const q = "SELECT ma.MaCollaborator, SUM(ctgh.GiaTien) as TongTien FROM taikhoan tk, giohang gh, ctgh, monan ma WHERE tk.IdUser = gh.MaUser and gh.MaGH = ctgh.MaGH "+
  "and ma.MaMA = ctgh.MaMA and tk.UserName=? GROUP BY ma.MaCollaborator"
  // const q = "((SELECT ma.MaMA, ma.TenMA, a.Url, (ma.GiaTien - gg.SoTienGiam) as GiaTien_New from monan ma, anhmonan a, giamgia gg WHERE ma.MaMA = a.MaMA and gg.MaMA = ma.MaMA and a.ViewPost = 1) UNION (SELECT ma.MaMA, ma.TenMA, a.Url, ma.GiaTien as GiaTien_New from monan ma, anhmonan a, giamgia gg WHERE ma.MaMA = a.MaMA and a.ViewPost = 1 and ma.MaMA NOT IN (SELECT gg.MaMA FROM giamgia gg)))"
  db.query(q, [username], (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error fetching collab in cart');
      } else {
        res.json(data);
      }
  });
}

export const getCartDetailByMaCollab = async (req, res) => {
  const  MaKH = req.params.MaKH;
  const  MaCollab = req.params.MaCollab;
  const q = "SELECT ctgh.* FROM ctgh, monan ma, giohang gg WHERE ctgh.MaMA = ma.MaMA and gg.MaGH = ctgh.MaGH and "+
  "gg.MaUser = ? and ma.MaCollaborator = ?"
  // const q = "((SELECT ma.MaMA, ma.TenMA, a.Url, (ma.GiaTien - gg.SoTienGiam) as GiaTien_New from monan ma, anhmonan a, giamgia gg WHERE ma.MaMA = a.MaMA and gg.MaMA = ma.MaMA and a.ViewPost = 1) UNION (SELECT ma.MaMA, ma.TenMA, a.Url, ma.GiaTien as GiaTien_New from monan ma, anhmonan a, giamgia gg WHERE ma.MaMA = a.MaMA and a.ViewPost = 1 and ma.MaMA NOT IN (SELECT gg.MaMA FROM giamgia gg)))"
  db.query(q, [MaKH, MaCollab], (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error fetching collab in cart');
      } else {
        res.json(data);
      }
  });
}

export const getCheckSL = async (req, res) => {
  const  MaKH = req.params.MaKH;
  const q = "SELECT COUNT(*) as count FROM giohang gg, ctgh, monan ma WHERE gg.MaGH = ctgh.MaGH and ma.MaMA = ctgh.MaMA and ctgh.SL > ma.SL and gg.MaUser=?"
  // const q = "((SELECT ma.MaMA, ma.TenMA, a.Url, (ma.GiaTien - gg.SoTienGiam) as GiaTien_New from monan ma, anhmonan a, giamgia gg WHERE ma.MaMA = a.MaMA and gg.MaMA = ma.MaMA and a.ViewPost = 1) UNION (SELECT ma.MaMA, ma.TenMA, a.Url, ma.GiaTien as GiaTien_New from monan ma, anhmonan a, giamgia gg WHERE ma.MaMA = a.MaMA and a.ViewPost = 1 and ma.MaMA NOT IN (SELECT gg.MaMA FROM giamgia gg)))"
  db.query(q, [MaKH], (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error fetching count check SL');
      } else {
        res.json(data);
      }
  });
}

export const deleteCartByMaKH = (req,res) => {
  const {MaKH} = req.body
  // console.log('thông tin delete: '+ maKH + text + province + numericValue)
  const q = "DELETE FROM `ctgh` WHERE ctgh.MaGH = (SELECT gg.MaGH FROM giohang gg WHERE gg.MaUser = ?)"

  db.query(q, [MaKH],(err, result) => {
    if(err){
      res.status(500).send('Error delete address...')
    }
    res.status(200).send('Delete address successfuly ...')
  })
}

export const getCheckCart = async (req, res) => {
  const  username = req.params.username;
  const  MaMA = req.params.MaMA;
  const q = "SELECT count(*) as COUNT FROM ctgh, giohang gh, taikhoan tk WHERE tk.IdUser = gh.MaUser "+
  "and gh.MaGH = ctgh.MaGH and tk.UserName = ? and ctgh.MaMA = ?"
  // const q = "((SELECT ma.MaMA, ma.TenMA, a.Url, (ma.GiaTien - gg.SoTienGiam) as GiaTien_New from monan ma, anhmonan a, giamgia gg WHERE ma.MaMA = a.MaMA and gg.MaMA = ma.MaMA and a.ViewPost = 1) UNION (SELECT ma.MaMA, ma.TenMA, a.Url, ma.GiaTien as GiaTien_New from monan ma, anhmonan a, giamgia gg WHERE ma.MaMA = a.MaMA and a.ViewPost = 1 and ma.MaMA NOT IN (SELECT gg.MaMA FROM giamgia gg)))"
  db.query(q, [username, MaMA], (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error fetching count check cart');
      } else {
        res.json(data);
      }
  });
}

export const getIdCart = async (req, res) => {
  const  username = req.params.username;
  const q = "SELECT gh.MaGH FROM taikhoan tk, giohang gh WHERE tk.IdUser = gh.MaUser and tk.UserName=?"
  db.query(q, [username], (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error fetching count check cart');
      } else {
        res.json(data);
      }
  });
}

export const insertCartDetail = (req,res) => {
  const {MaGH, MaMA, GiaTien} = req.body
  console.log('thông tin insert cart detail: '+ MaGH, MaMA, GiaTien)
  const q = "INSERT INTO `ctgh` (`MaGH`, `MaMA`, `SL`, `GiaTien`) VALUES (?, ?, '1', ?)"

  db.query(q, [MaGH, MaMA, GiaTien],(err, result) => {
    if(err){
      res.status(500).send('Error delete address...')
    }
    res.status(200).send('Delete address successfuly ...')
  })
}
