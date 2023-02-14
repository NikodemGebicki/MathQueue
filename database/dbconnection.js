const mongoose = require('mongoose');

const urlstring = 'mongodb://127.0.0.1:27017/mongotest';

mongoose.set('strictQuery', true);

const db = (url) => {
    return mongoose.connect(urlstring);
}

module.exports = db;
