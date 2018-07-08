const express = require('express');
const bodyParser = require('body-parser');
//const logger = require('morgan');

const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//app.use(logger('tiny'));

app.post('/', (req, res) => {
    console.log("POST was called.");
    console.log(req.headers);
    res.status(201).send("Data can be created using this method (POST).")
});

app.get('/', (req, res) => {
    console.log('GET was called.');
    console.log(req.headers);
    res.status(200).send("GET is used to read information.");
    
});

app.put('/', (req, res) => {
    console.log("PUT was called.");
    console.log(req.headers);
    res.status(200).send("Use this (PUT) to update information.");
});

app.delete('/', (req, res) => {
    console.log("DELETE was called.")
    console.log(req.headers);
    res.json("Only use DELETE to remove the specified target.");
});

app.listen( 3000, () => console.log('Server running at http://localhost:3000'))
