const functions = require("firebase-functions");
const fs = require("fs");
const opml = require("opml");

function xmlToJSON(path, name) {
  console.assert(path === String);
  console.assert(name === String);
  path = String(path + name);
  const nameArr = name.split(".");
  name = String(nameArr[0]);
  fs.readFile(path, function(err, opmltext) {
    if (err) {
      console.log(err.message);
    } else {
      opml.parse(opmltext, function(err, theOutline) { // convert OPML text into a JavaScript structure
        const jsonPath = "./out/" + name + ".json";
        fs.writeFile(jsonPath, JSON.stringify(theOutline, undefined, 4), function(err) {
          if (err) {
            console.log(err.message);
          } else {
            console.log("states.json was saved.");
          }
        });
        const opmlName = name + "copy.opml";
        const opmlCopyPath = "./out/" + opmlName;
        fs.writeFile(opmlCopyPath, opml.stringify(theOutline), function(err) {
          if (err) {
            console.log(err.message);
          } else {
            console.log(opmlName + " was saved.");
          }
        });
        opml.visitAll(theOutline, function(node) {
          node.text = node.text.toUpperCase();
          return true; // keep visiting
        });
        console.log(opml.stringify(theOutline)); // view the uppercased outline in the JS console
      });
    }
  });
}

