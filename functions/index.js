const express = require("express");
var parseString = require('xml2js').parseString;
const functions = require("firebase-functions");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text())
app.post('/', function(req, res) {
    let xmldata = req.body;

    console.log('Raw XML: ' + xmldata);
    // parsing xml data
    parseString(xmldata, function (err, results) {

        // parsing to json
        let data = JSON.stringify(results, null, 4)

        // display the json data
        console.log("Parsed JSON: " + data);
        res.status(200).send(data);
    });
});

// Endpoint to Get a list of users aka Homepage
app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
})



exports.app = functions.https.onRequest(app);


