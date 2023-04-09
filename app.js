const express = require('express');
const mongoose = require('mongoose')
const router = require('./routes/user-routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config();
// functionality of the app
const app = express();
const allowedOrigins = ['https://brain-rush-f-rgo4-mvin3k6y6-joulqasis.vercel.app'];
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
app.use(cookieParser());
app.use(express.json());
app.use('/api', router);

// connect to database if successfull app.listen port 5000!
mongoose.connect(`mongodb+srv://BrainRushGames:${process.env.MONGODB_PASSWORD}@brainrush-cluster.4qfwa0t.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(5000);
        console.log('Database is connected! Listening to localhost 5000!')
    }).catch((err) => console.log(err));
// middlewear

module.exports = router;


