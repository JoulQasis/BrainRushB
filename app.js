const express = require('express');
const mongoose = require('mongoose')
const router = require('./routes/user-routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config();

const app = express();
const corsOptions = {
    origin: ['https://brain-rush-f-rgo4-mvin3k6y6-joulqasis.vercel.app', 'https://brain-rush-f-rgo4.vercel.app'],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use('/api', router);

mongoose.connect(`mongodb+srv://BrainRushGames:${process.env.MONGODB_PASSWORD}@brainrush-cluster.4qfwa0t.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(5000);
        console.log('Database is connected! Listening to localhost 5000!')
    }).catch((err) => console.log(err));

module.exports = router;
