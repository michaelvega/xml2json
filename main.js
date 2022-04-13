const fs = require ("fs");
const opml = require ("opml");

fs.readFile ("./res/states.opml", function (err, opmltext) {
    if (err) {
        console.log (err.message);
    }
    else {
        opml.parse (opmltext, function (err, theOutline) { //convert OPML text into a JavaScript structure
            //console.log ("\nThe outline's title is \"" + theOutline.opml.head.title + ".\""); //see comment at top
            //console.log ("The third state in the Great Plains is: \"" + theOutline.opml.body.subs [0].subs [1].subs [2].text + ".\"");
            fs.writeFile ("./out/states.json", JSON.stringify (theOutline, undefined, 4), function (err) {
                if (err) {
                    console.log (err.message);
                }
                else {
                    console.log ("states.json was saved.");
                }
            });
            fs.writeFile ("./out/statescopy.opml", opml.stringify (theOutline), function (err) {
                if (err) {
                    console.log (err.message);
                }
                else {
                    console.log ("statescopy.opml was saved.");
                }
            });
            opml.visitAll (theOutline, function (node) {
                node.text = node.text.toUpperCase ();
                return (true); //keep visiting
            });
            console.log (opml.stringify (theOutline)); //view the uppercased outline in the JS console
        });
    }
});