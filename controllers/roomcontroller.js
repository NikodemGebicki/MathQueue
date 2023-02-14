const room = require('../database/Models/roommodel');
const handler = require('../database/Handlers/roomhandler')

exports.getrooms = async(req, res) => {
    res.json(await handler.getRooms());
}
exports.getroom = async(req, res) => {
    const room = await handler.getRoom('123');
    res.json(room[0]);
}
exports.createroom = (req, res) => {
    handler.createRoom(Math.floor(Math.random()*255).toString(), 'New room 1');
    res.sendStatus(200);
}
exports.patchroom = (req, res) => {
    handler.pathRoom('123', '0101', 'takiecos');
    res.sendStatus(200);
}
exports.deleteroom = (req, res) => {
    handler.deleteRoom('0101');
    res.sendStatus(200);
}