const room = require('../Models/roommodel')

//Room
    //get all/one
    //create new room -> (u)code, name
    //change room atrib -> oldCode, newCode, name
    //delete room -> code

//Task
    //create new task -> roomCode, (u)taskId, subTaskCount, Bullet
    //update subtask state -> roomCode, taskId, subtaskId, newState
    //delete task -> roomCode, taskId

exports.getRooms = async() => {
    const findRooms = await room.find();
    return findRooms;
}
exports.getRoom = async(code) => {
    const findRoom = await room.find({code:code});
    return findRoom;
}

exports.createRoom = async(code, name) => {
    const findCode = await room.find({code:`${code}`});
    if(findCode.length){
        return false;
    }else{
        await room({code: `${code}`,name: `${name}`}).save();
        return true;
    }
}

exports.pathRoom = async(code, newCode, name) => {
    const findColl = await room.find({code:newCode});
    if(findColl.length){
        return false;
    }else{
        await room.updateOne({code: code},{code: newCode, name: name});
        return true;
    }
}

exports.deleteRoom = async(code) => {
    await room.deleteOne({code: code});
    return true;
}