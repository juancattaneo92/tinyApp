const express = require('express');
const app = express();
const mongoose = require ('mongoose');

const db = require ('./config/keys').mongoURI
const questions = require('./routes/api/questions')

mongoose
    .connect(db, { userNewUrlParser: true, userUnifiedTopology: true })
    .then( () => console.log("Mongo is working!"))
    .catch(err => console.log(err))


app.get('/', (req, res) => res.send("this works!"))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is serving on port ${port}`))