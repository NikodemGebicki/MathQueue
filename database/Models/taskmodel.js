const mongoose = require('mongoose');

const subTaskSchema = new mongoose.Schema({
    subTaskId:{
        type: Number
    },
    state:{
        type: Number,
        default: 0
    },
    member:{
        type: String
    }
})

const taskSchema = new mongoose.Schema({
    taskId: {
        type: String,
        required: true,
        unique: true
    },
    subTasks: {
        type: [subTaskSchema],
        required: true
    },
    subTaskBullet: {
        type: String,
        default: 'numeric'
    }
})

module.exports = taskSchema;
