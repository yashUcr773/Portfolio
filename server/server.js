const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;

// using cors
app.use(cors())

// Middleware
app.use(bodyParser.json());

// Routes
// Define your backend routes here
require('./routes/routes-handler')(app)

// Serve the static files from the Angular app
app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
