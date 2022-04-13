# xml2json

Converts OPML files to json. These can later be stored in a firestore database using documents. Has one function: xmlToJSON(path: String, name: String) -> JSON.
### Usage:
```
xmlToJSON("./res/", "states.opml");
```
* **Input**: Source to opml file
* **Output**: JSON file (in /out)