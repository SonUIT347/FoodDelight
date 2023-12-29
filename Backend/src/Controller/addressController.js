import db from '../../index.js';

export const getAddress = async (req, res) => {
    const  username = req.params.username;
    const q = "SELECT dc.id, dc.diachi, dc.tinh, dc.sdt, dc.value from taikhoan tk, diachikh dc WHERE tk.IdUser = dc.maKH and tk.UserName = ?";
    db.query(q, [username], (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching address');
        } else {
          res.json(data);
        }
    });
}


export const postNewAddress = (req,res) => {
  console.log('heeeeeee')
  const {maKH, text, province, numericValue} = req.body
  console.log('thông tin insert: '+ maKH + text + province + numericValue)
  const q = 'INSERT INTO `diachikh`(`maKH`, `diachi`, `tinh`, `sdt`, `value`) VALUES (?, ?, ?, ?, 0)'

  db.query(q, [maKH, text, province, numericValue],(err, result) => {
    if(err){
      res.status(500).send('Error add address...')
    }
    res.status(200).send('Add address successfuly ...')
  })
}


export const postDeleteAddress = (req,res) => {
  const {idAddress} = req.body
  // console.log('thông tin delete: '+ maKH + text + province + numericValue)
  const q = 'DELETE FROM diachikh WHERE id = ?'

  db.query(q, [idAddress],(err, result) => {
    if(err){
      res.status(500).send('Error delete address...')
    }
    res.status(200).send('Delete address successfuly ...')
  })
}

export const postUpdateAddress = (req,res) => {
  const {idAddress, text, province, numericValue} = req.body
  console.log('thông tin update: '+ idAddress + text + province + numericValue)
  const q = 'UPDATE diachikh SET diachi= ? , tinh= ?, sdt= ?  WHERE id = ?'

  db.query(q, [text, province, numericValue, idAddress],(err, result) => {
    if(err){
      res.status(500).send('Error update address...')
    }
    res.status(200).send('update address successfuly ...')
  })
}


export const postUpdateValue1Address = (req,res) => {
  const {idAddress} = req.body
  console.log('thông tin update: '+ idAddress)
  const q = 'UPDATE diachikh SET value= 1  WHERE id = ?'

  db.query(q, [idAddress],(err, result) => {
    if(err){
      res.status(500).send('Error update address...')
    }
    res.status(200).send('update address successfuly ...')
  })
}

export const postUpdateValue0Address = (req,res) => {
  const {idAddress, maKH} = req.body
  console.log('thông tin update: '+ idAddress + maKH)
  const q1 = 'UPDATE diachikh SET value= 0  WHERE id != ? and maKH = ?'

  db.query(q1, [idAddress, maKH],(err, result) => {
    if(err){
      res.status(500).send('Error update address...')
    }
    res.status(200).send('update address successfuly ...')
  })
}

export const getAddressSelected = async (req, res) => {
  const  username = req.params.username;
  const q = "SELECT dc.id, dc.diachi, dc.tinh, dc.sdt, dc.value from taikhoan tk, diachikh dc WHERE tk.IdUser = dc.maKH and tk.UserName = ? and dc.value = 1";
  db.query(q, [username], (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error fetching address');
      } else {
        res.json(data);
      }
  });
}