import db from '../../index.js';

export const updateAcceptToCollabUser = (req, res) => {
    const mama = req.params.mama;
    const q = "UPDATE `monan` SET `trangthai` = 'approve' WHERE mama = ?";
    db.query(q, [mama], (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        console.log('success update pending to approve dish');
        return res.json(data);
    });
};

export const updateDenyToCollabUser = (req, res) => {
    const mama = req.params.mama;
    const q = "UPDATE `monan` SET `trangthai` = 'deny' WHERE mama = ?";
    db.query(q, [mama], (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        console.log('success update pending to approve dish');
        return res.json(data);
    });
};

export const updateAccept = (req, res) => {
    const macb = req.params.macb;
    const q = "UPDATE `collaborator` SET trangthai = 'accept' WHERE macollaborator = ?"
    db.query(q, [macb], (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        console.log('success update pending to approve dish');
        return res.json(data);
    });
    const q2 = "UPDATE taikhoan SET phanquyen = '1'  WHERE taikhoan.IdUser = ?"
    db.query(q2, [macb], (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        // console.log('success update pending to approve dish');
        // return res.json(data);
    });
}

export const updateDeny = (req, res) => {
    const macb = req.params.macb;
    const q = "UPDATE `collaborator` SET trangthai = 'deny' WHERE macollaborator = ?"
    db.query(q, [macb], (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        console.log('success update pending to approve dish');
        return res.json(data);
    });
}