var createServer = require('https').createServer;
var parse = require('url').parse;
var next = require('next');
var fs = require('fs');
var dev = process.env.NODE_ENV !== 'production';
var app = next({ dev: dev });
var handle = app.getRequestHandler();
var httpsOptions = {
    key: fs.readFileSync('./certificates/localhost.key'),
    cert: fs.readFileSync('./certificates/localhost.crt')
};
app.prepare().then(function () {
    createServer(httpsOptions, function (req, res) {
        var parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(3000, function (err) {
        if (err)
            throw err;
        console.log('> Ready on https://localhost:3000');
    });
});
