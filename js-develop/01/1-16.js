var add = function() {
	var total = 0;

	for(var index = 0, length = arguments.length; index < length; index++){
		total = total + arguments[index];
	}

	return total;
};

console.log(add(1,1));
console.log(add(1,2,3));
console.log(add(17,19,12,25,182,42,2));