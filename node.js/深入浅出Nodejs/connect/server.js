var connect = require('connect');
var app = connect();

var logger = function (req, res, next) {
	console.log(req.method, req.url);
	next();
};

var goodbyeworld = function (req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Goodbye World');
};

var helloworld = function (req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
};

app.use(logger);
app.use('/hello', helloworld);
app.use('/goodbye', goodbyeworld);


app.listen(3000);
console.log('Server running at http://localhost:3000');