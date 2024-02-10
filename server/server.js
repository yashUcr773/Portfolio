const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const { downloadPDF } = require("./controllers/pdfController");
const app = express();
const port = process.env.PORT || 3000;

// using cors
app.use(cors());

// Middleware
app.use(bodyParser.json());

function isSecure(req) {
    if (req.headers["x-forwarded-proto"]) {
        return req.headers["x-forwarded-proto"] === "https";
    }
    return req.secure;
}

// redirect any page form http to https
app.use((req, res, next) => {
    if (
        process.env.NODE_ENV !== "development" &&
        process.env.NODE_ENV !== "test" &&
        !isSecure(req)
    ) {
        res.redirect(301, `https://${req.headers.host}${req.url}`);
    } else {
        next();
    }
});

// Routes
// Define your backend routes here
require("./routes/routes-handler")(app);

// Serve the static files from the Angular app
app.use(express.static(path.join(__dirname, "../dist")));

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

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
