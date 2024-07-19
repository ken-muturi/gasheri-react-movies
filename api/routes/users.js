const express = require("express");
const route = express.Router();
const db = require('../utils/db');

route.get("/", function (req, res) {
    db.query('SELECT id, firstname, lastname, email  FROM users', function (err, results) {
        if (err) {
            return res.status(400).json({ error: err.sqlMessage });
        }
        return res.status(200).json(results)
    })
})

route.get("/:id", function (req, res) {
    db.query('SELECT * FROM users WHERE id=' + req.params.id, function (err, results) {
        if (err) {
            return res.status(400).json({ error: err.sqlMessage });
        }
        return res.status(200).json(results[0])
    })
})


route.patch("/:id", function (req, res) {
    const body = req.body
    const updateColumns = Object.entries(body).map(b => {
        const [column, value] = b;
        return `${column} = '${value}'`
    });

    db.query('UPDATE users SET ' + updateColumns.join(", ") + 'WHERE id=' + req.params.id, function (err, results) {
        if (err) {
            return res.status(400).json({ error: err.sqlMessage });
        }
        return res.status(200).json(results)
    })
})

route.delete("/:id", function (req, res) {
    db.query('DELETE FROM users WHERE id=' + req.params.id, function (err, results) {
        if (err) {
            return res.status(400).json({ error: err.sqlMessage });
        }
        return res.status(200).json(results)
    })
})

module.exports = route