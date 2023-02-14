/*
const Room = require('../models/room');
const Task = require('../models/task');
const url = require("url");

exports.createserver = (req, res) => {

    const room = Room.create({
        'keycode': req.body.room_code,
        'roomname': req.body.room_name
    }).then(function () {
        req.flash('roomcode', req.body.room_code);
        res.redirect('/host');
    })
}

exports.createtask = (req, res) => {

    const task = Task.create({
        'tasknumber': req.body.taskNumber,
        'subtaskcount': req.body.taskCount,
        'roomid': req.flash('roomcode')
    }).then(function () {
        console.log(req.flash('roomcode'));
        res.redirect('/host');
    })
}

exports.createclient = (req, res) => {
    req.flash('username', req.body.username);
    req.flash('code', req.body.code);

    Room.room.where('KeyCode', req.body.code).fetch().then(function(room){
        req.flash('roomname', room);
        res.redirect('/queueclient');
    })
}*/
