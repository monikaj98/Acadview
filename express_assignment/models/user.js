const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: Number,

    },
    email: {
        type: String
    },
    student: {
        type: Boolean
    }
})

module.exports = User = mongoose.model('user', userSchema)