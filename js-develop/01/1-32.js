'use strict';

var personalDetails = {
	name: 'Den Odell',
	email: 'den.odell@me.com'
};

Object.freeze(personalDetails);

console.log(Object.isFrozen(personalDetails));

personalDetails.name = "John Odell";