const con = require('../../config/dbconfig')
const { dao } = require('../dao')

const daoCommon = {
    findAll: (res, table)=> {
        con.execute(
            `SELECT * FROM ${table}`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO error findAll', error)
                }
            }
        )
    },

    findById: (res, table, id) => {
        con.execute(
            `SELECT * FROM ${table} WHERE ${table}_id = ?;`,
            [id],
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(`DAO ERROR findById`, error)
                }
            }
        )
    },

    count: (res, table)=> {
        con.execute(
            `SELECT COUNT(*) count FROM ${table};`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(`DAO ERROR count`, error)
                }
            }
        )
    },

    create: (req, res, table)=> {
        if(Object.keys(req.body).length === 0) {
            res.json({
                'error': true,
                "message": 'no fields to create'
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `INSERT INTO ${table} SET ${fields.join(' = ?, ')} = ?;`,
                values,
                (error, dbres) => {
                    if (!error) {
                        res.send(`Last id: ${dbres.insertId}`)
                    } else {
                        console.log('DAO ERROR create', error)
                        res.send('Error adding item')
                    }
                }
            )
        }
    }
}

module.exports = daoCommon