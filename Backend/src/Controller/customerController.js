import db from '../../index.js';


export const createCustomer = (req,res) => {
    const {IdUser, Name, Adress, status} = req.body
    const q = 'INSERT INTO khachhang (makh, tenkh, trangthai) VALUES (?,?,?)'
  
    db.query(q, [IdUser, Name, Adress, status],(err, result) => {
      if(err){
        res.status(500).send('Error create user...')
      }
      res.status(200).send('Create successfuly ...')
    })
  }