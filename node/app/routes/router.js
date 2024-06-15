const express = require('express')
const router = express.Router()

const port = process.env.port || 3005

const tables = ['user', 'product', 'category', 'cart']

tables.forEach(table => {
    router.use(`/api/${table}`, require(`./api/${table}Routes`))
})

router.get('/api', (req, res) => {
    res.json({
        'ALL Users': `http://localhost:${port}/api/user`,
        'ALL Products': `http://localhost:${port}/api/product`,
        'ALL Categories': `http://localhost:${port}/api/category`,
        'Cart Items': `http://localhost:${port}/api/cart`
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