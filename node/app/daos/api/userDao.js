const con = require('../../config/dbconfig')
const { findAll } = require('../common/daoCommon')

const userDao = {

    table: 'users',

    findAll: (res, table) => {
        con.execute(
            `SELECT * FROM ${table};`,
            (error, rows) => {
                if(!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR userDao', error)
                }
            }
        )
    },

    findById: (res, table, id) => {
        con.execute(
            `SELECT * FROM ${table} WHERE ${table}_id = ?;`,
            [id],
            (error,rows)=> {
                if(!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR userId', error)
                }
            }
        )
    },

    count: (res, table)=> {
        con.execute(
            `SELECT COUNT(*) count FROM ${table};`,
            (error, rows)=> {
                if(!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR userCount', error)
                }
            }
        )
    },

    sort: (res, table) => {
        con.execute(
            `SELECT * FROM ${table} ORDER BY lName, fName;`,
            (error, rows)=> {
                if(!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR userCount', error)
                }
            }
        )
    },

    create: (req, res, table) => {
        if(Object.keys(req.body).length === 0) {
            res.json({
                'error': true,
                "message": "no fields to create"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `INSERT INTO ${table} SET ${fields.join(' = ?, ')} = ?;`,
                values,
                (error, dbres)=> {
                    if (!error) {
                        res.send(`Last id ${dbres.insertId}`)
                    } else {
                        console.log('DAO ERROR: ', error)
                        res.send('Error adding player')
                    }
                }
            )
        }
    }
}

module.exports = userDao