// Create web server
// 1. Load the http module
const http = require('http');
// 2. Load the fs module
const fs = require('fs');
// 3. Load the url module
const url = require('url');
// 4. Create a server
const server = http.createServer(function (req, res) {
    // 5. Parse the request containing file name
    const parsedUrl = url.parse(req.url, true);
    // 6. Parse the query
    const query = parsedUrl.query;
    // 7. Get the filename
    const filename = `.${parsedUrl.pathname}`;
    // 8. Read the file
    fs.readFile(filename, function(err, data) {
        if(err) {
            // 9. HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        // 10. Page found
        // HTTP Status: 200 : OK
        // Content Type: text/plain
        res.writeHead(200, {'Content-Type': 'text/html'});
        // Write the content of the file to response body
        res.write(data);
        // End the response
        return res.end();
    });
});
// 11. Listen on port 8080
server


