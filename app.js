const {EventEmitter} = require('events')
const url = require('url')
const http = require('http')
const dataImport = require('./data.js')

const eventEmitter = new EventEmitter()

eventEmitter.on('run', () => {
    const server = http.createServer((req, res) => {
        if (req.method === 'GET') {
            const parsedUrl = url.parse(req.url, true);
            const pathName = parsedUrl.pathname;
            if (pathName == '/') {
                try {
                    res.setHeader('Content-Type', 'text/html');
                    res.statusCode = 200;
                    res.end('<h1>Hello World!</h1>');
                } 
                catch (error) {
                    console.log("There is an error:", error.message);    
                }
            }
            else if (pathName == '/users') {
                try {
                    const users = dataImport.users;
                    res.setHeader('Content-Type', 'application/json');
                    res.statusCode = 200;
                    res.end(JSON.stringify(users));
                } 
                catch (error) {
                    console.log("There is an error:", error.message);    
                }
                
            }
            else {
                try {
                    const failed404 = dataImport.failed404;
                    res.setHeader('COntent-Type', 'application/json');
                    res.statusCode = 404;
                    res.end(JSON.stringify(failed404));
                }
                catch (error) {
                    console.log("There is an error:", error.message);
                }
                
            }
        }
        else {
            try {
                const failed405 = dataImport.failed405;
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 405;
                res.end(JSON.stringify(failed405));
            }
            catch (error) {
                console.log("There is an error:", error.message);
            }
        }
    });
    server.listen(3000, () => {
        console.log('Server is running with port 3000');
    });
});

eventEmitter.emit('run')