const mongoose = require('mongoose');
const taskSchema = require('./taskmodel');

const roomSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        default: 'Nowy pokoj'
    },
    tasks:{
        type: [taskSchema]
    }
})

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;