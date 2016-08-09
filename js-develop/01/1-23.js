var o = {
	message: [{
		'success': false,
		'error_message': 'The wrong parameters were passed to this web service'		
	},
	{
		'success': true,
		'error_message': null		
	}]
};

var s = '{"success":false,"error_message":"The wrong parameters were passed to this web service"}';

console.log(JSON.stringify(o));

console.log(JSON.parse(s));

var months = ['January', 'Febraury', 'March', 'April', 'May'];

var items = {
	'0': 'January',
	'1': 'February',
	'2': 'March',
	'3': 'April',
	'4': 'May'
};

console.log(Array.isArray(months));
console.log(Array.isArray(items));

for(s in months) {
	console.log(months[s]);
}

months.forEach(function(value, index, fullArray) {
	console.log(value + " is month number" + (index+1) + " of " + fullArray.length);
});

everyItemContainsR = months.every(function(value, index, fullArray) {
	return value.indexOf('r') >= 0;
});

monthContainsR = months.filter(function(value, index, fullArray) {
	return value.indexOf('r') >= 0;
});

someItemContainsR = months.some(function(value, index, fullArray) {
	return value.indexOf('r') >= 0;
});

console.log(everyItemContainsR, someItemContainsR);

var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday'];

dayFirstLetters = daysOfWeek.map(function(value, index, fullArray) {
	return value + ' starts with ' + value.charAt(0);
});

console.log(dayFirstLetters.join(', '));
console.log(monthContainsR.join(', '));