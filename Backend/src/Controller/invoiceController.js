import db from '../../index.js';

export const getInvoiceIDByMaCollaborator = (req, res) => {
    const macb = req.params.macb;
    const q = `SELECT hoadon.MaHD, hoadon.TongTien 
                FROM hoadon
                JOIN khachhang ON hoadon.MaKH = khachhang.MaKH
                JOIN cthd ON hoadon.MaHD = cthd.MaHD
                JOIN monan ON cthd.MaMA = monan.MaMA
                WHERE hoadon.MaCollaborator = 'MC0001' and hoadon.TrangThai = 'pending'
                GROUP BY hoadon.MaHD`;
    db.query(q, [macb], (err, data) => {
        if (err) {
            console.log('Get invoice by macb has an error: ' + err);
            res.status(500).send('Had an error fetching food status');
        } else {
            res.status(200).json(data);
            // Note: Send the response status and data in a single response.
        }
    });
};

export const getInvoiceDataByID = (req, res) => {
    const mahd = req.params.mahd
    const q = `SELECT cthd.SL, monan.GiaTien, monan.TenMA, monan.MaMA, anhmonan.MaAnh, anhmonan.Url FROM hoadon
                JOIN cthd ON cthd.MaHD = hoadon.MaHD
                JOIN monan ON monan.MaMA = cthd.MaMA
                JOIN anhmonan ON monan.MaMA = anhmonan.MaMA
                WHERE hoadon.MaHD = ? AND anhmonan.ViewPost = '1'`;
    db.query(q, [mahd], (err, data) => {
        if (err) {
            console.log('Get invoice by macb has an error: ' + err);
            res.status(500).send('Had an error fetching food status');
        } else {
            res.status(200).json(data);
            // Note: Send the response status and data in a single response.
        }
    });
}

export const updateAcceptInvoice = (req, res) => {
    const mahd = req.params.mahd
    const q = `UPDATE hoadon SET trangthai = 'approve' WHERE mahd = ?`
    db.query(q, [mahd], (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        console.log('success update pending to approve invoice');
        return res.json(data);
    });
}
export const updateDenytInvoice = (req, res) => {
    const mahd = req.params.mahd
    const q = `UPDATE hoadon SET trangthai = 'deny' WHERE mahd = ?`
    db.query(q, [mahd], (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        console.log('success update pending to deny invoice');
        return res.json(data);
    });
}