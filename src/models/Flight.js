const mongoose = require('mongoose')

const flightSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    memo: {
        type: String,
        default: ''
    },
    aircraft: {
        type: String,
        default: ''
    },
    depTime: {
        type: Date,
        default: new Date()
    },
    depDate: {
        type: Date,
        default: new Date()
    },
    depAirport: {
        code: String,
        name: String,
    },
    arrAirport: {
        code: String,
        name: String,
    },
    passengers: {
        type: Array,
        default: []
    }
})

mongoose.model('Flight', flightSchema)