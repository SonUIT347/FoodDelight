import db from '../../index.js';

export const getCountSale = async (req, res) => {
    const q = 'SELECT COUNT(*) AS saleCount FROM giamgia'
    db.query(q, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching user count');
        } else {
            const saleCount = rows[0].saleCount;
            res.json({ saleCount });
        }
    });
}
export const saveSale = async (req, res) => {
    const { magiamgia, tengiamgia, giobatdau, gioketthuc, ngaygiamgia } = req.body;
    const q1 = 'INSERT INTO giamgia (magiamgia, tengiamgia, giobatdau, gioketthuc, ngaygiamgia) VALUES (?,?,?,?,?)';
    try {
        await new Promise((resolve, reject) => {
            db.query(q1, [magiamgia, tengiamgia, giobatdau, gioketthuc, ngaygiamgia], (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
        res.status(200).send('Create food sale successfully...');
    } catch (err) {
        console.error('Error creating food sale:', err);
        res.status(500).send('Error creating food sale...');
        return;
    }
}
export const saveCtgg = async (req, res) => {
    const { magiamgia, mama, count, sotiengiam } = req.body;
    const q1 = 'INSERT INTO ctgg (magiamgia, mama, sl, sotiengiam) VALUES (?,?,?,?)';
    try {
        await new Promise((resolve, reject) => {
            db.query(q1, [magiamgia, mama, count, sotiengiam], (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
        res.status(200).send('Create food sale successfully...');
    } catch (err) {
        console.error('Error creating food sale:', err);
        res.status(500).send('Error creating food sale...');
        return;
    }
}