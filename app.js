var http = require('http');
var fs = require('fs');
var server = http.createServer(
    function(req, res) {
        console.log('client request url: ', req.url);
        if (req.url === '/') {
            fs.readFile('index.html', "utf8", function(errors, contents) {
                res.writeHead(200, { 'content-type': 'text/html' });
                res.write(contents);
                res.end();
            });
        } else if (req.url === '/dojo.html') {
            fs.readFile("dojo.html", "utf8", function(errors, contents) {
                res.writeHead(200, { "content-type": "text/html" });
                res.write(contents);
                res.end();
            });
        } else {
            res.end('File not Found');
        }
    });
server.listen(6789);
console.log("Running in locatlhost at port 6789.");