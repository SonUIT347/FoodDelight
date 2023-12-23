import db from "../..index";


export const saveFood = (req,res) => {
    const q = 'select * from food'
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}