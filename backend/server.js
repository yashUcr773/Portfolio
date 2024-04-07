require("dotenv").config();
const { CONSTANTS } = require("./config/constants.config");
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const fs = require("fs");
const { downloadPDF } = require("./controllers/pdfController");
const path = require('path')
const port = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");
const {
    credentials,
} = require("./middlewares/access-control-credentials.middleware");

// Set allow credentials to true to send cookie
app.use(credentials);

// Cross-Origin Resource Sharing
app.use((req, res, next) => {
    if (req.path.startsWith("/apigateway")) {
        // Use CORS with options for other routes
        cors(corsOptions)(req, res, next);
    } else {
        // Allow all origins for the root path
        cors()(req, res, next);
    }
});

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// to parse cookies sent with request
app.use(cookieParser());

// Routes
// Define your backend routes here
require("./routes/routes-handler")(app);

// redirect backend to fe
app.use("/", (req, res) => {
    return res.redirect(CONSTANTS.FEURL);
});

// global router catcher
app.all("*", (req, res) => {
    return res.redirect(CONSTANTS.FEURL);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
