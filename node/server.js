const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const router = require('./app/routes/router')

const port = process.env.port || 3005

server.use(helmet()).use(cors())

server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.use('/', router)

server.listen(port, ()=> {
    console.log(`if i had $${port} i'd buy ${port} beyblades`)
})