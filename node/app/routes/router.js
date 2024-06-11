const express = require('express')
const router = express.Router()

const port = process.env.port || 3005

const tables = ['users']

tables.forEach(table => {
    router.use(`/api/${table}`, require(`./api/${table}Routes`))
})

router.get('/api', (req, res) => {
    res.json({
        'ALL Users': `http://localhost:${port}/api/users`
    })
})

router.get('*', (req, res)=> {
    if(req.url === '/favicon.io/') {
        res.end()
    } else {
        res.send('<h1>Error: This page does not exist</h1>')
    }
})

module.exports = router