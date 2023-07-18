const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;

const fs = require('fs');
//joining path of directory 

function getFiles(directoryPath) {

    //passsing directoryPath and callback function
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            console.log(file);
        });
    });
}


// using cors
app.use(cors())

// Middleware
app.use(bodyParser.json());

// Routes
// Define your backend routes here
require('./routes/routes-handler')(app)

console.log(__dirname)

// Serve the static files from the Angular app
app.use(express.static(path.join(__dirname, '../')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
