const express = require('express');
const mongoose = require('mongoose')
const router = require('./routes/user-routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config();
// functionality of the app
const app = express();
app.use(cors({ credentials: true, origin: ["http://localhost:3000","https://brain-rush-f-rgo4-r15jna2dq-joulqasis.vercel.app/"] }));
app.use(cookieParser());
app.use(express.json());

// add the following middleware to set the Access-Control-Allow-Origin header
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use('/api', router);

// connect to database if successful app.listen port 5000!
mongoose.connect(`mongodb+srv://BrainRushGames:${process.env.MONGODB_PASSWORD}@brainrush-cluster.4qfwa0t.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(5000);
        console.log('Database is connected! Listening to localhost 5000!')
    }).catch((err) => console.log(err));
// middlewear

module.exports = router;
