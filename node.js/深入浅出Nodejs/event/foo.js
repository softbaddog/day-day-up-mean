var hello = require("./bar");

var hungry = "hippo";
	
function awesome() {
	console.log(hello.hello(hungry).toUpperCase());
}

exports.awesome = awesome;