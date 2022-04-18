
const request = require("request");
const fs = require("fs");

function updateClient(postData){
    var clientServerOptions = {
        uri: url,
        body: postData,
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        }
    }
    request(clientServerOptions, function (error, response) {
        console.log(error,response.body);
        return;
    });
}


const url = "http://localhost:8080/";
let path = "../res/text.xml"

// read XML from a file
const xml = fs.readFileSync(path, "utf8");
xml.trim();

console.log(xml);
updateClient(xml);
