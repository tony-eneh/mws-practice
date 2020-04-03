let http = require('http');
let fs = require('fs');

const PORT = process.env.PORT || 1337;
const server = http.createServer((req, res) => {
        console.log(req.url);
        //mini router
        let _url;
        if (_url = /^\/$/.exec(req.url)) {
            fs.readFile('index.html', (err, data) => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            })
        } else {
            //strip leading slash from url
            _url = req.url.substr(1);

            //set correct mime-types so that service worker can work
            if (_url.endsWith('.js')) {
                res.writeHead(200, {
                    'Content-Type': 'text/javascript'
                })
            } else if (_url.endsWith('.css')) {
                res.writeHead(200, {
                    'Content-Type': 'text/css'
                })
            }
            fs.readFile(_url, (err, data) => {
                res.end(data);
            })
        }
    })
    .listen(PORT);

console.log('server is on on server:%s, port:%s', server.address().host, PORT);