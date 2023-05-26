require ('./models/User')
require ('./models/Flight')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const flightRoutes = require('./routes/flightRoutes')
const requireAuth = require('./middlewares/requireAuth')

const app = express ();
app.use(bodyParser.json())
app.use(authRoutes)
app.use(flightRoutes)

const mongoUri = 'mongodb+srv://admin:abc123ABC@cluster0.8iwsjbz.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoUri)

mongoose.connection.on('connected', () => {
    console.log('connected to mongo instance')
})

mongoose.connection.on('error', (err) => {
    console.error('error connecting to mongo', err)
})

app.get('/', requireAuth, (req, res) => {
    res.send(`Email: ${req.user.email} ID: ${req.user.id}`)
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})