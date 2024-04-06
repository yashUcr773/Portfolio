require("dotenv").config();
const { CONSTANTS } = require("./config/constants.config");
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const fs = require("fs");
const { downloadPDF } = require("./controllers/pdfController");
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

app.get("/resume", async (req, res) => {
    try {
        const url =
            "https://d26phrkqcbbdz6.cloudfront.net/Resume/Yash_resume.pdf";
        const destinationPath = "./Yash_Resume.pdf";

        await downloadPDF(url, destinationPath);

        // Read the PDF file
        const stat = fs.statSync(destinationPath);

        // Set headers
        res.writeHead(200, {
            "Content-Type": "application/pdf",
            "Content-Length": stat.size,
        });

        // Create a read stream and pipe it to the response
        const readStream = fs.createReadStream(destinationPath);
        readStream.pipe(res);
    } catch (e) {
        res.status(404).send("URL Not Found");
        console.log(e);
    }
});

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
