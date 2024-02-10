const axios = require("axios");
const fs = require("fs");

// Function to download a PDF from a URL
async function downloadPDF(url, destinationPath) {
    const response = await axios({
        method: "GET",
        url: url,
        responseType: "stream",
    });

    // Create a writable stream and pipe the response data to it
    const writer = fs.createWriteStream(destinationPath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on("finish", resolve);
        writer.on("error", reject);
    });
}

module.exports = {
    downloadPDF,
};
