import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import bodyParser from "body-parser";
import { parseString } from "xml2js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text())
app.post('/converter', function(req, res) {
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

// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address;
    if(host === "::") host = "localhost";
    var port = server.address().port;
    console.log("REST API demo app listening at http://%s:%s", host, port)
})

