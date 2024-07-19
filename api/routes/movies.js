const express = require("express");
const route = express.Router();
const db = require('../utils/db');


route.get("/movies", function (req, res) {
    db.query('SELECT * FROM movies', function (err, results) {
        if (err) {
            return res.status(400).json({ error: err.sqlMessage });
        }
        return res.status(200).json(results)
    })
})

route.get("/movies/search", function (req, res) {
    const search = req.query.q;
    let where = '';
    if (search) {
        where = `WHERE title LIKE '%${search}%' OR year LIKE '%${search}%' OR created_by LIKE '%${search}%' OR created_at LIKE '%${search}%' OR homecity LIKE '%${search}%'`
    }
    db.query(`SELECT * FROM movies ${where}`, (err, results) => {
        if (err) {
            return res.status(400).json({ error: err.sqlMessage });
        }
        else if (results.length) {
            return res.status(200).json(results)
        }
        return res.status(400).json({ error: "no records found" });
    })
})

route.get("/movies/:id", function (req, res) {
    db.query('SELECT * FROM movies WHERE id=' + req.params.id, function (err, results) {
        if (err) {
            return res.status(400).json({ error: err.sqlMessage });
        }
        return res.status(200).json(results)
    })
})

route.post("/movies", function (req, res) {
    const body = req.body
    const values = `('${body.title}', '${body.year}', '${body.created_by}','${body.created_at}')`;
    db.query('INSERT INTO movies (title, year, created_by, created_at ) VALUES ' + values, function (err) {
        if (err) {
            return res.status(400).json({ error: err.sqlMessage });
        }
        db.query("SELECT * FROM movies WHERE id = LAST_INSERT_ID();", (e, result) => {
            if (e) {
                return res.status(400).json({ error: e.sqlMessage });
            }
            return res.status(200).json(result[0])
        })
    })
})

route.patch("/movies/:id", function (req, res) {
    const body = req.body
    const updateColumns = Object.entries(body).map(b => {
        const [column, value] = b;
        return `${column} = '${value}'`
    });

    db.query('UPDATE movies SET ' + updateColumns.join(", ") + 'WHERE id=' + req.params.id, function (err, results) {
        if (err) {
            return res.status(400).json({ error: err });
        }
        return res.status(200).json(results)
    })
})

route.delete("/movies/:id", function (req, res) {
    db.query('DELETE FROM movies WHERE id=' + req.params.id, function (err, results) {
        if (err) {
            return res.status(400).json({ error: err });
        }
        return res.status(200).json(results)
    })
})

module.exports = route