const express = require('express');
const mongoose = require('mongoose');
const Routes = require('./app_modules/get-routes');


const app = express();

let db = "mongodb://localhost/mlh";
let port = process.env.port ||  8000;

//mongoose connection 
mongoose.connect(db, {
    useMongoClient: true
});



//global promise 
mongoose.Promise = global.Promise;




//ERROR HANDLERS 
app.use((err, req, res, next) => {
    res.status(422).send(err.message);
})


//TURN ON PORTS
app.listen(port, () => {
    console.log(`app is running on ${port}, verify on browser `);
})