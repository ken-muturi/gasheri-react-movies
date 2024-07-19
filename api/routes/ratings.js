const express = require("express");
const route = express.Router();
const db = require('../utils/db');


route.get("/", function(req, res) {
    db.query('SELECT * FROM classes', function (err, results) {
        if(err) {
            return res.status(400).json({error: err.sqlMessage});
        }
        return res.status(200).json(results)
    })
})

route.get("/:id", function (req, res) {
    db.query('SELECT * FROM classes WHERE id=' + req.params.id, function (err, results) {
        if (err) {
            return res.status(400).json({ error: err.sqlMessage });
        }
        return res.status(200).json(results)
    })
})

route.post("/", function (req, res) {
    const body = req.body
    const values = `('${body.title}','${body.description}')`;
    db.query('INSERT INTO classes (title, description ) VALUES ' + values, function (err) {
        if (err) {
            return res.status(400).json({ error: err });
        }
        db.query("SELECT * FROM classes WHERE id = LAST_INSERT_ID();", (e, result) => {
            if (e) {
                return res.status(400).json({ error: e.sqlMessage });
            }
            return res.status(200).json(result[0])
        })
    })
})

route.patch("/:id", function (req, res) {
    const body = req.body
    const updateColumns = Object.entries(body).map(b => {
        const [column, value] = b;
        return `${column} = '${value}'`
    });

    db.query('UPDATE classes SET ' + updateColumns.join(", ") + 'WHERE id=' + req.params.id, function (err, results) {
        if (err) {
            return res.status(400).json({ error: err.sqlMessage });
        }
        return res.status(200).json(results)
    })
})

route.delete("/:id", function (req, res) {
    db.query('DELETE FROM classes WHERE id=' + req.params.id, function (err, results) {
        if (err) {
            return res.status(400).json({ error: err.sqlMessage });
        }
        return res.status(200).json(results)
    })
})

module.exports=route