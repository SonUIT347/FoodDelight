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
    const q3 = 'INSERT INTO anhmonan (maanh, mama, image) VALUES ?'
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