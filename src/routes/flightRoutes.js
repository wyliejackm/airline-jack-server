const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middlewares/requireAuth')

const Flight = mongoose.model('Flight')

const router = express.Router()
router.use(requireAuth)

router.get('/flights', async (req, res) => {
    const flights = await Flight.find({ userId: req.user._id })
    
    res.send(flights)
})

router.post('/flight', async (req, res) => {
    if (!req.aircraft || !req.depTime || !req.depDate || !depAirport || !arrAirport) {
        return res.status(422).send({ error: 'Missing flight info' })
    }
    try {
        res.send(req.body)
        const flight = new Flight({ 
            memo: req.body.memo,
            aircraft: req.body.aircraft.type,
            depTime: req.body.depTime,
            depDate: req.body.depDate,
            depAirport: req.body.depAirport,
            arrAirport: req.body.arrAirport, 
            passengers: req.body.passengers, 
            userId: req.user._id })
        await flight.save()
        //res.send(flight)
    } catch (err) {
        return res.status(422).send({ error: err.message })
    }
    //console.log(req)
})

module.exports = router

