const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GameScore = new Schema({

    userId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: false
    },
    gamename: {
        type: String,
        required: true,
    },
    score: {
        type: String,
    },
    rounds: {
        type: String,
    },
    level: {
        type: String,
    },
    timer: {
        type: String,
    },
    percentage: {
        type: String,
    }
});


module.exports = mongoose.model('GameScore', GameScore);

// users
