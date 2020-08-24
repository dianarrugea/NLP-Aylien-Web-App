var path = require('path');
const cors = require('cors');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');

// Setting up the file to hide the API credentials
const dotenv = require ('dotenv');
dotenv.config();

// Instantiating an Aylien object
var Aylien = require("aylien_textapi");

// Setting up the API crdentials
var textApi = new Aylien ({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
})

const app = express()

app.use(cors());

app.use(express.static('dist'))

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
});

// Endpoint for Aylien 
app.post('/aylienEndPoint', async (req, res) => {
    
    let newData = req.body.url;
    
    console.log("the data sent from formHandler: ", newData);
    
    textApi.sentiment(newData, function(error, response) {
        if (error === null) {
            console.log("Response from the API", response);
            res.send(response);
        }
    });
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('This web app is listening on port: 8081!')
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});