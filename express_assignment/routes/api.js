const express = require('express')
const userData = require('../models/user')
const routes = express.Router();

routes.get('/api/avengers', (req, res) => {
    res.send({ type: 'GET' })
})

routes.post('/api/data', (req, res) => {
    userData.create(req.body).then((data) => {
        res.send(data)
    })

})
routes.put('/api/data/:id', (req, res) => {
    console.log(req.params.id)
    res.send({ type: 'UPDATE' })
})

routes.delete('/api/data/:id', (req, res) => {
    console.log(req.params.id)
    res.send({ type: 'DELETE' })
})

module.exports = routes