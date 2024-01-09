import db from '../../index.js';

export const saveFood = async (req, res) => {
    const { mama, macollaborator, nameFood, priceFood, luotban, trangthai, stock, selected, imageUrls, maAnh, desFood } = req.body;
    const q1 = 'INSERT INTO monan (mama, macollaborator, tenma, giatien, luotban, trangthai, sl, mota) VALUES (?,?,?,?,?,?,?,?)';
    try {
        await new Promise((resolve, reject) => {
            db.query(q1, [mama, macollaborator, nameFood, priceFood, luotban, trangthai, stock, desFood], (err, data) => {
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
    const q3 = 'INSERT INTO anhmonan (maanh, mama, url, viewpost) VALUES ?'
    try {
        const values = imageUrls.map((url, index) => [
            maAnh + index, // Assuming index + 1 is the image ID; adjust based on your schema
            mama,
            url,
            index === 0 ? 1 : 0,
        ]);

        await new Promise((resolve, reject) => {
            db.query(q3, [values], (err, data) => {
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
    const q = "SELECT * FROM monan ma, anhmonan a, loaimonan l, ctlma, collaborator c WHERE ma.MaMA = ctlma.MaMA and a.MaMA = ma.MaMA and a.ViewPost = 1 " +
        "and ma.TrangThai = 'approve' and ctlma.MaLoaiMA = l.MaLoaiMA and l.TenLoaiMA = 'Món Chính' and ma.SL > 0 and c.MaCollaborator = ma.MaCollaborator"
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
    const q = "SELECT * FROM monan ma, anhmonan a, loaimonan l, ctlma, collaborator c WHERE ma.MaMA = ctlma.MaMA and a.MaMA = ma.MaMA " +
        "and a.ViewPost = 1 and ma.TrangThai = 'approve' and ctlma.MaLoaiMA = l.MaLoaiMA and l.TenLoaiMA = 'Món tráng miệng' and ma.SL > 0 and c.MaCollaborator = ma.MaCollaborator";
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

export const selectFoodSnacks = async (req, res) => {
    const day = req.params.day
    const time = req.params.time
    const q = "SELECT * FROM monan ma, anhmonan a, loaimonan l, ctlma, collaborator c WHERE ma.MaMA = ctlma.MaMA and a.MaMA = ma.MaMA and a.ViewPost = 1 " +
        "and ma.TrangThai = 'approve' and ctlma.MaLoaiMA = l.MaLoaiMA and l.TenLoaiMA = 'Món khai vị' and ma.SL > 0 and c.MaCollaborator = ma.MaCollaborator";
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
    const macb = req.params.macb;
    const q = `
        SELECT m.mama, m.tenma, m.SL, m.GiaTien, MAX(i.Url) AS image
        FROM monan m
        JOIN collaborator c ON m.macollaborator = c.macollaborator
        LEFT JOIN anhmonan i ON m.mama = i.mama
        WHERE m.trangthai = 'pending' AND c.macollaborator = ?
        GROUP BY m.mama, m.tenma, m.SL, m.GiaTien;
    `;

    db.query(q, [macb], (err, data) => {
        if (err) {
            console.log('Get food status has an error: ' + err);
            res.status(500).send('Had an error fetching food status');
        } else {
            res.json(data);
        }
    });
};

export const getAllFoodPending = async (req, res) => {
    // const macb = req.params.macb;
    const q = `
        SELECT m.mama, m.tenma, m.SL, m.GiaTien, MAX(i.Url) AS image
        FROM monan m
        JOIN collaborator c ON m.macollaborator = c.macollaborator
        LEFT JOIN anhmonan i ON m.mama = i.mama
        WHERE m.trangthai = 'pending'
        GROUP BY m.mama, m.tenma, m.SL, m.GiaTien;
    `;
    
    db.query(q, (err, data) => {
        if (err) {
            console.log('Get food status has an error: ' + err);
            res.status(500).send('Had an error fetching food status');
        } else {
            res.json(data);
        }
    });
};

export const getFoodApprove = async (req, res) => {
    const macb = req.params.macb;
    const q = `
        SELECT m.mama, m.tenma, m.SL, m.GiaTien, MAX(i.Url) AS image
        FROM monan m
        JOIN collaborator c ON m.macollaborator = c.macollaborator
        LEFT JOIN anhmonan i ON m.mama = i.mama
        WHERE m.trangthai = 'approve' AND c.macollaborator = ?
        GROUP BY m.mama, m.tenma, m.SL, m.GiaTien;
    `;
    db.query(q, [macb], (err, data) => {
        if (err) {
            console.log('Get food status has an error: ' + err);
            res.status(500).send('Had an error fetching food status');
        } else {
            res.json(data);
        }
    });
}
export const getFoodDeny = async (req, res) => {
    const macb = req.params.macb;
    const q = `
        SELECT m.mama, m.tenma, m.SL, m.GiaTien, MAX(i.Url) AS image
        FROM monan m
        JOIN collaborator c ON m.macollaborator = c.macollaborator
        LEFT JOIN anhmonan i ON m.mama = i.mama
        WHERE m.trangthai = 'deny' AND c.macollaborator = ?
        GROUP BY m.mama, m.tenma, m.SL, m.GiaTien;
    `;
    db.query(q, [macb], (err, data) => {
        if (err) {
            console.log('Get food status has an error: ' + err);
            res.status(500).send('Had an error fetching food status');
        } else {
            res.json(data);
        }
    });
}



export const getFood = async (req, res) => {
    const maMA = req.params.maMA;
    const q = "SELECT * FROM monan ma, collaborator c WHERE ma.MaMA = ? and c.MaCollaborator = ma.MaCollaborator"
    // const q='select * FROM taikhoan';
    db.query(q, [maMA], (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching food mains');
        } else {
            res.json(data);
        }
    });
};

export const getImageFood = async (req, res) => {
    const maMA = req.params.maMA;
    const q = "SELECT * FROM anhmonan a WHERE a.MaMA = ? ORDER BY a.ViewPost DESC"
    // const q='select * FROM taikhoan';
    db.query(q, [maMA], (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching food mains');
        } else {
            res.json(data);
        }
    });
};

export const getTypeFood = async (req, res) => {
    const maMA = req.params.maMA;
    const q = "SELECT lma.TenLoaiMA FROM loaimonan lma, ctlma WHERE lma.MaLoaiMA = ctlma.MaLoaiMA and ctlma.MaMA = ?"
    // const q='select * FROM taikhoan';
    db.query(q, [maMA], (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching food mains');
        } else {
            res.json(data);
        }
    });
};
export const getFoodByCategories = async (req, res) => {
    const q = `SELECT * FROM loaimonan, monan, ctlma, anhmonan
    WHERE monan.MaMA = ctlma.MaMA 
    AND ctlma.MaLoaiMA = loaimonan.MaLoaiMA 
    AND anhmonan.MaMA = monan.MaMA
    AND loaimonan.MaLoaiMA = 'LM0001'
    AND anhmonan.ViewPost = 1
    AND monan.trangthai = 'approve'`
    db.query(q, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching food mains');
        } else {
            res.json(data);
        }
    });
}
export const getFoodByCategoriesTrangMieng = async (req, res) => {
    const q = `SELECT * FROM loaimonan, monan, ctlma, anhmonan
    WHERE monan.MaMA = ctlma.MaMA 
    AND ctlma.MaLoaiMA = loaimonan.MaLoaiMA 
    AND anhmonan.MaMA = monan.MaMA
    AND loaimonan.MaLoaiMA = 'LM0003'
    AND anhmonan.ViewPost = 1
    AND monan.trangthai = 'approve'`
    db.query(q, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching food mains');
        } else {
            res.json(data);
        }
    });
}
export const getFoodByCategoriesKhaiVi = async (req, res) => {
    const q = `SELECT * FROM loaimonan, monan, ctlma, anhmonan
    WHERE monan.MaMA = ctlma.MaMA 
    AND ctlma.MaLoaiMA = loaimonan.MaLoaiMA 
    AND anhmonan.MaMA = monan.MaMA
    AND loaimonan.MaLoaiMA = 'LM0002'
    AND anhmonan.ViewPost = 1
    AND monan.trangthai = 'approve'`
    db.query(q, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching food mains');
        } else {
            res.json(data);
        }
    });
}
export const getFoodById = async (req, res) => {
    const mama = req.params.mama;
    const q = `
    SELECT m.mama,m.tenma,m.SL,m.GiaTien, MAX(i.Url) AS image
    FROM monan m
    LEFT JOIN
    anhmonan i ON m.mama = i.mama
    WHERE
    m.mama = ?
    GROUP BY
    m.mama, m.tenma, m.SL, m.GiaTien;
`;
    db.query(q, [mama], (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching food mains');
        } else {
            res.json(data);
        }
    });
}


