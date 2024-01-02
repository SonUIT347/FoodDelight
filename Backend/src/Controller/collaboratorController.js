import db from '../../index.js';

export const getCollaborator = async (req, res) => {
    const  username = req.params.username;
    const q = "SELECT c.* FROM collaborator c, taikhoan tk WHERE c.MaCollaborator = tk.IdUser and tk.UserName = ?"
    // const q='select * FROM taikhoan';
    db.query(q, [username],(err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching food mains');
        } else {
          res.json(data);
        }
    });
};

export const postInsertCollaborator = (req,res) => {
    const {maKH, nameCollaborator, address, province, sdt, email} = req.body
    console.log('thông tin update: '+ '' + maKH + ' ' + nameCollaborator + ' ' + address + ' ' + province + ' ' + sdt + ' ' + email)
    const q1 = "INSERT INTO `collaborator`(`MaCollaborator`, `TenUser`, `DiaChi`, `TrangThai`, `Tinh`, `Sdt`, `Email`) VALUES (?,?,?,'pending',?,?,?)"
  
    db.query(q1, [maKH, nameCollaborator, address, province, sdt, email],(err, result) => {
      if(err){
        return res.status(500).json({ success: false, message: 'Error insert collaborator...' });
      }
       return res.status(200).json({ success: true, message: 'insert collaborator successfuly...' })
    })
  }