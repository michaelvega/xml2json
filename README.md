# xml2json

Converts OPML files to json. These can later be stored in a firestore database using documents. Has one function: xmlToJSON(path: String, name: String) -> JSON.

## [**Now Live!**](https://fir-functions-api-a924d.uc.r.appspot.com/)

* **Input**: Source to opml file
* **Output**: JSON file (in /out)

## Start Guide
To upload your **own** XML files, POST request with an XML string. For Google Drive:
* Read XML as utf8: xmlString
* Request the site with these parameters:
*   uri: https://us-central1-fir-functions-api-a924d.cloudfunctions.net/app/
*   body: xmlString,
*   method: 'POST',
*     headers: {  'Content-Type': 'text/plain'  }

```Note```: JSON is 4 space delimited
