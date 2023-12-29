import db from '../../index.js';

export const saveFood = async (req, res) => {
    const { mama, macollaborator, tenma, giatien, luotban, trangthai, soluong, fooddetail } = req.body;
    const q1 = 'INSERT INTO monan (mama, macollaborator, tenma, giatien, luotban, trangthai, sl) VALUES (?,?,?,?,?,?,?)';
    try {
        await new Promise((resolve, reject) => {
            db.query(q1, [mama, macollaborator, tenma, giatien, luotban, trangthai, soluong], (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
        res.status(200).send('Create food successfully...');
    } catch (err) {
        console.error('Error creating food:', err);
        res.status(500).send('Error creating food...');
        return;
    }
    const q2 = 'INSERT INTO ctlma (mama, maloaima) VALUES ?';
    try {
        const values = fooddetail.map(detail => [mama, detail]);
        await new Promise((resolve, reject) => {
            db.query(q2, [values], (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    } catch (err) {
        console.error('Error creating food detail:', err);
        res.status(500).send('Error creating food detail...');
    }
};


export const selectFoodMains = async (req, res) => {
    const q = "(SELECT ma.*, lma.TenLoaiMA, gg.SoTienGiam, a.Url, c.Tinh From monan ma, loaimonan lma, ctlma, giamgia gg, anhmonan a, collaborator c WHERE ma.MaMA = ctlma.MaMA and ctlma.MaLoaiMA = lma.MaLoaiMA and gg.MaMA=ma.MaMA and lma.TenLoaiMA='Món chính' and a.MaMA = ma.MaMA and a.ViewPost = 1 and ma.MaCollaborator = c.MaCollaborator)" +
    "UNION (SELECT ma.*, lma.TenLoaiMA, gg.SoTienGiam=0, a.Url, c.Tinh From monan ma, loaimonan lma, ctlma, giamgia gg, anhmonan a, collaborator c WHERE ma.MaMA = ctlma.MaMA and ctlma.MaLoaiMA = lma.MaLoaiMA and lma.TenLoaiMA='Món chính' and a.MaMA = ma.MaMA and a.ViewPost = 1 and ma.MaCollaborator = c.MaCollaborator and ma.MaMA NOT IN (SELECT gg.MaMA FROM giamgia gg))";
    // const q='select * FROM taikhoan';
    db.query(q, (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching food mains');
        } else {
          res.json(data);
        }
    });
};

export const selectFoodDesserts = async (req, res) => {
    const q = "(SELECT ma.*, lma.TenLoaiMA, gg.SoTienGiam, a.Url, c.Tinh From monan ma, loaimonan lma, ctlma, giamgia gg, anhmonan a, collaborator c WHERE ma.MaMA = ctlma.MaMA and ctlma.MaLoaiMA = lma.MaLoaiMA and gg.MaMA=ma.MaMA and lma.TenLoaiMA='Món tráng miệng' and a.MaMA = ma.MaMA and a.ViewPost = 1 and ma.MaCollaborator = c.MaCollaborator)" +
    "UNION (SELECT ma.*, lma.TenLoaiMA, gg.SoTienGiam=0, a.Url, c.Tinh From monan ma, loaimonan lma, ctlma, giamgia gg, anhmonan a, collaborator c WHERE ma.MaMA = ctlma.MaMA and ctlma.MaLoaiMA = lma.MaLoaiMA and lma.TenLoaiMA='Món tráng miệng' and a.MaMA = ma.MaMA and a.ViewPost = 1 and ma.MaCollaborator = c.MaCollaborator and ma.MaMA NOT IN (SELECT gg.MaMA FROM giamgia gg))";
    // const q='select * FROM taikhoan';
    db.query(q, (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching food desserts');
        } else {
          res.json(data);
        }
    });
};

export const selectFoodSales = async (req, res) => {
    const q = "(SELECT ma.*, lma.TenLoaiMA, gg.SoTienGiam, a.Url, c.Tinh From monan ma, loaimonan lma, ctlma, giamgia gg, anhmonan a, collaborator c WHERE ma.MaMA = ctlma.MaMA and ctlma.MaLoaiMA = lma.MaLoaiMA and gg.MaMA=ma.MaMA and lma.TenLoaiMA='Đang Sale' and a.MaMA = ma.MaMA and a.ViewPost = 1 and ma.MaCollaborator = c.MaCollaborator)";
    // const q='select * FROM taikhoan';
    db.query(q, (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching food sales');
        } else {
          res.json(data);
        }
    });
};


export const selectFoodMains_Sale = async (req, res) => {
    const q = "(SELECT ma.*, lma.TenLoaiMA, gg.SoTienGiam, a.Url, c.Tinh From monan ma, loaimonan lma, ctlma, giamgia gg, anhmonan a, collaborator c WHERE ma.MaMA = ctlma.MaMA and ctlma.MaLoaiMA = lma.MaLoaiMA and gg.MaMA=ma.MaMA and lma.TenLoaiMA='Món chính' and a.MaMA = ma.MaMA and a.ViewPost = 1 and ma.MaCollaborator = c.MaCollaborator)";
    // const q='select * FROM taikhoan';
    db.query(q, (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching food mains');
        } else {
          res.json(data);
        }
    });
};

export const selectFoodDesserts_Sale = async (req, res) => {
    const q = "(SELECT ma.*, lma.TenLoaiMA, gg.SoTienGiam, a.Url, c.Tinh From monan ma, loaimonan lma, ctlma, giamgia gg, anhmonan a, collaborator c WHERE ma.MaMA = ctlma.MaMA and ctlma.MaLoaiMA = lma.MaLoaiMA and gg.MaMA=ma.MaMA and lma.TenLoaiMA='Món tráng miệng' and a.MaMA = ma.MaMA and a.ViewPost = 1 and ma.MaCollaborator = c.MaCollaborator)"
    // const q='select * FROM taikhoan';
    db.query(q, (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching food desserts');
        } else {
          res.json(data);
        }
    });
};