import { async } from '@firebase/util';
import db from '../../index.js';

export const saveFood = async (req, res) => {
    const { mama, macollaborator, nameFood, priceFood, luotban, trangthai, stock, selected, imageUrls, maAnh } = req.body;
    console.log(imageUrls + 'image')
    const q1 = 'INSERT INTO monan (mama, macollaborator, tenma, giatien, luotban, trangthai, sl) VALUES (?,?,?,?,?,?,?)';
    try {
        await new Promise((resolve, reject) => {
            db.query(q1, [mama, macollaborator, nameFood, priceFood, luotban, trangthai, stock], (err, data) => {
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
        const values = selected.map(detail => [mama, detail]);
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
    const q3 = 'INSERT INTO anhmonan (maanh, mama, url) VALUES ?'
    try {
        const values = imageUrls.map((url, index) => [
            maAnh + index, // Assuming index + 1 is the image ID; adjust based on your schema
            mama,
            url
        ]);

        await new Promise((resolve, reject) => {
            db.query(q3, [values], (err, data) => {
                console.log(q3)
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
    const day = req.params.day
    const time = req.params.time
    const q = "SELECT ma.*, ctgg.SoTienGiam, lma.TenLoaiMA, a.Url, c.Tinh FROM monan ma, collaborator c, anhmonan a, giamgia gg, ctgg, ctlma, loaimonan lma WHERE ctlma.MaMA = ma.MaMA and ma.MaMA = a.MaMA and ma.MaCollaborator = c.MaCollaborator and ma.MaMA = ctgg.MaMA and a.ViewPost = 1 and ma.TrangThai = 'approve' and lma.TenLoaiMA = 'Món chính' and lma.MaLoaiMA = ctlma.MaLoaiMA and gg.MaGiamGia = ctgg.MaGiamGia and gg.NgayGiamGia = ? and gg.GioBatDau <= ? and gg.GioKetThuc >= ? and ctgg.SL > 0 " +
    "UNION " +
    "SELECT ma.*, 0 SoTienGiam, lma.TenLoaiMA, a.Url, c.Tinh FROM monan ma, collaborator c, anhmonan a, ctlma, loaimonan lma WHERE ctlma.MaMA = ma.MaMA and ma.MaMA = a.MaMA and ma.MaCollaborator = c.MaCollaborator and a.ViewPost = 1 and ma.TrangThai = 'approve' and lma.TenLoaiMA = 'Món chính' and lma.MaLoaiMA = ctlma.MaLoaiMA and ma.MaMA NOT IN (SELECT ctgg.MaMA FROM giamgia gg, ctgg WHERE gg.MaGiamGia = ctgg.MaGiamGia and gg.NgayGiamGia = ? and gg.GioBatDau <= ? and gg.GioKetThuc >= ? and ctgg.SL > 0)";
    // const q='select * FROM taikhoan';
    db.query(q, [day, time, time, day, time, time], (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching food mains');
        } else {
            res.json(data);
        }
    });
};

export const selectFoodDesserts = async (req, res) => {
    const day = req.params.day
    const time = req.params.time
    const q = "SELECT ma.*, ctgg.SoTienGiam, lma.TenLoaiMA, a.Url, c.Tinh FROM monan ma, collaborator c, anhmonan a, giamgia gg, ctgg, ctlma, loaimonan lma WHERE ctlma.MaMA = ma.MaMA and ma.MaMA = a.MaMA and ma.MaCollaborator = c.MaCollaborator and ma.MaMA = ctgg.MaMA and a.ViewPost = 1 and ma.TrangThai = 'approve' and lma.TenLoaiMA = 'Món Tráng miệng' and lma.MaLoaiMA = ctlma.MaLoaiMA and gg.MaGiamGia = ctgg.MaGiamGia and gg.NgayGiamGia = ? and gg.GioBatDau <= ? and gg.GioKetThuc >= ? and ctgg.SL > 0 " +
    "UNION " +
    "SELECT ma.*, 0 SoTienGiam, lma.TenLoaiMA, a.Url, c.Tinh FROM monan ma, collaborator c, anhmonan a, ctlma, loaimonan lma WHERE ctlma.MaMA = ma.MaMA and ma.MaMA = a.MaMA and ma.MaCollaborator = c.MaCollaborator and a.ViewPost = 1 and ma.TrangThai = 'approve' and lma.TenLoaiMA = 'Món tráng miệng' and lma.MaLoaiMA = ctlma.MaLoaiMA and ma.MaMA NOT IN (SELECT ctgg.MaMA FROM giamgia gg, ctgg WHERE gg.MaGiamGia = ctgg.MaGiamGia and gg.NgayGiamGia = ? and gg.GioBatDau <= ? and gg.GioKetThuc >= ? and ctgg.SL > 0)";
    // const q='select * FROM taikhoan';
    db.query(q, [day, time, time, day, time, time], (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching food mains');
        } else {
            res.json(data);
        }
    });
};

export const selectFoodSales = async (req, res) => {
    const day = req.params.day
    const time = req.params.time
    const q = "SELECT ma.*, ctgg.SoTienGiam, a.Url, c.Tinh FROM monan ma, collaborator c, anhmonan a, giamgia gg, ctgg WHERE ma.MaMA = a.MaMA and ma.MaCollaborator = c.MaCollaborator and ma.MaMA = ctgg.MaMA and a.ViewPost = 1 and ma.TrangThai = 'approve' and gg.MaGiamGia = ctgg.MaGiamGia and gg.NgayGiamGia = ? and gg.GioBatDau <= ? and gg.GioKetThuc >= ? and ctgg.SL > 0";
    // const q='select * FROM taikhoan';
    db.query(q, [day, time, time], (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching food sale');
        } else {
            res.json(data);
        }
    });
};


export const selectFoodMains_Sale = async (req, res) => {
    const day = req.params.day
    const time = req.params.time
    const q = "SELECT ma.*, ctgg.SL AS SLGG, ctgg.SoTienGiam, lma.TenLoaiMA, a.Url, c.Tinh FROM monan ma, collaborator c, anhmonan a, giamgia gg, ctgg, ctlma, loaimonan lma WHERE ctlma.MaMA = ma.MaMA and ma.MaMA = a.MaMA and ma.MaCollaborator = c.MaCollaborator and ma.MaMA = ctgg.MaMA and a.ViewPost = 1 and ma.TrangThai = 'approve' and lma.TenLoaiMA = 'Món chính' and lma.MaLoaiMA = ctlma.MaLoaiMA and gg.MaGiamGia = ctgg.MaGiamGia and gg.NgayGiamGia = ? and gg.GioBatDau <= ? and gg.GioKetThuc >= ? and ctgg.SL > 0 " 
       // const q='select * FROM taikhoan';
    db.query(q, [day, time, time], (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching food sale');
        } else {
            res.json(data);
        }
    });
};

export const selectFoodDesserts_Sale = async (req, res) => {
    const day = req.params.day
    const time = req.params.time
    const q = "SELECT ma.*, ctgg.SL AS SLGG, ctgg.SoTienGiam, lma.TenLoaiMA, a.Url, c.Tinh FROM monan ma, collaborator c, anhmonan a, giamgia gg, ctgg, ctlma, loaimonan lma WHERE ctlma.MaMA = ma.MaMA and ma.MaMA = a.MaMA and ma.MaCollaborator = c.MaCollaborator and ma.MaMA = ctgg.MaMA and a.ViewPost = 1 and ma.TrangThai = 'approve' and lma.TenLoaiMA = 'Món tráng miệng' and lma.MaLoaiMA = ctlma.MaLoaiMA and gg.MaGiamGia = ctgg.MaGiamGia and gg.NgayGiamGia = ? and gg.GioBatDau <= ? and gg.GioKetThuc >= ? and ctgg.SL > 0 "
    // const q='select * FROM taikhoan';
    db.query(q, [day, time, time], (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching food sale');
        } else {
            res.json(data);
        }
    });
};
export const getFoodCount = async (req, res) => {
    const q = 'SELECT COUNT(*) AS foodCount FROM monan'
    db.query(q, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching user count');
        } else {
            const foodCount = rows[0].foodCount;
            res.json({ foodCount });
        }
    });
}
export const getImageCount = async (req, res) => {
    const q = 'SELECT COUNT(*) AS imageCount FROM anhmonan'
    db.query(q, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching user count');
        } else {
            const imageCount = rows[0].imageCount;
            res.json({ imageCount });
        }
    });
}
export const getFoodPending = async (req, res) => {
    const macb = req.params.macb
    const q = 'SELECT m.mama, m.tenma, m.SL, m.GiaTien, a.Url FROM monan m, collaborator c, anhmonan a WHERE m.macollaborator = c.macollaborator AND m.MaMA = a.MaMA AND m.trangthai = "pending" AND c.macollaborator = (?)'
    db.query(q, [macb], (err, data) => {
        if (err) {
            console.log('Get foodstatus have an error ' + err)
            res.status(500).send('had an error to fetching food status')
        } else {
            res.json(data)
        }
    })
}
export const getFoodApprove = async (req, res) => {
    const macb = req.params.macb
    const q = 'SELECT m.mama, m.tenma, m.SL, m.GiaTien, a.Url FROM monan m, collaborator c, anhmonan a WHERE m.macollaborator = c.macollaborator AND m.MaMA = a.MaMA AND m.trangthai = "approve" AND c.macollaborator = (?)'
    db.query(q, [macb], (err, rows) => {
        if (err) {
            console.log('Get foodstatus have an error ' + err)
            res.status(500).send('had an error to fetching food status')
        } else {
            res.json(rows)
        }
    })
}
export const getFoodDeny = async (req, res) => {
    const macb = req.params.macb
    const q = 'SELECT m.mama, m.tenma, m.SL, m.GiaTien, a.Url FROM monan m, collaborator c, anhmonan a WHERE m.macollaborator = c.macollaborator AND m.MaMA = a.MaMA AND m.trangthai = "deny" AND c.macollaborator = (?)'
    db.query(q, [macb], (err, rows) => {
        if (err) {
            console.log('Get foodstatus have an error ' + err)
            res.status(500).send('had an error to fetching food status')
        } else {
            res.json(rows)
        }
    })
}


export const getFood = async (req, res) => {
    const  maMA = req.params.maMA;
    const q = "(SELECT ma.*, gg.SoTienGiam, a.Url, c.Tinh From monan ma, giamgia gg, anhmonan a, collaborator c WHERE gg.MaMA=ma.MaMA and a.MaMA = ma.MaMA and a.ViewPost = 1 and ma.MaCollaborator = c.MaCollaborator and ma.MaMA = ?)"
    " UNION " +
"(SELECT ma.*, gg.SoTienGiam=0, a.Url, c.Tinh From monan ma, giamgia gg, anhmonan a, collaborator c WHERE a.MaMA = ma.MaMA and a.ViewPost = 1 and ma.MaCollaborator = c.MaCollaborator and ma.MaMA and ma.MaMA = ? NOT IN (SELECT gg.MaMA FROM giamgia gg))"
    // const q='select * FROM taikhoan';
    db.query(q, [maMA, maMA],(err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching food mains');
        } else {
          res.json(data);
        }
    });
};

export const getImageFood = async (req, res) => {
    const  maMA = req.params.maMA;
    const q = "SELECT * FROM anhmonan a WHERE a.MaMA = ? ORDER BY a.ViewPost DESC"
    // const q='select * FROM taikhoan';
    db.query(q, [maMA],(err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching food mains');
        } else {
          res.json(data);
        }
    });
};

export const getTypeFood = async (req, res) => {
    const  maMA = req.params.maMA;
    const q = "SELECT lma.TenLoaiMA FROM loaimonan lma, ctlma WHERE lma.MaLoaiMA = ctlma.MaLoaiMA and ctlma.MaMA = ?"
    // const q='select * FROM taikhoan';
    db.query(q, [maMA],(err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching food mains');
        } else {
          res.json(data);
        }
    });
};


