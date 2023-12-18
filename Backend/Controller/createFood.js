import {db} from '../index.js'


export const CreateFood = (req,res) => {
    const q = 'select * from food'
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}