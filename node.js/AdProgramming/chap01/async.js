function wrapper (price) {
	var freeVal = price;

	function closure (delta) {
		return freeVal * delta;
	}
	return closure;
}

var clo1 = wrapper(100);
var clo2 = wrapper(200);

setTimeout(function() {
	for (var i = 0; i < 100; i++) {
		console.log(clo1(i));
		console.log(clo2(i));
	}
}, 500);