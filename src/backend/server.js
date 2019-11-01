  
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 5500;
const hostname = 'localhost';

const paths = [
    [/html$/i, path.join(__dirname, '../frontend/index.html'), 'text/html' ],
	[/style\.css$/i, path.join(__dirname, '../frontend/style.css'), 'text/css' ],
	[/app\.js$/i, path.join(__dirname, '../frontend/app.js'), 'text/javascript' ],
    [/circle\.png$/i, path.join(__dirname, '../../assets/circle.png'), 'image/png' ]
];

http.createServer(function (request, response) {
	console.log('request.url:', request.url);
     paths.find(([re, filepath, type]) => {
        if (re.test(request.url)) {
            console.log('current file being opened is:', filepath)
            let match = re.test(request.url); 

            if (!match) {
                return;
            }

            fs.readFile(filepath, (err, content) => {
                if (err) {
                    console.error(err);
                    response.end('');
                    return;
                }
            
                response.writeHead(200, { 'Content-Type': type});
                response.write(content);
                response.end();
            });
        }
    });
}).listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}`);
});
