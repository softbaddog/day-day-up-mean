// for (var i = 0; i < 5; i++) {
// 	(function(j) {
// 		setTimeout(function timer() {
// 			console.log(j);
// 		}, 1000*j);		
// 	})(i);
// }
"use strict";

for (let i = 0; i < 5; i++) {
	setTimeout(function() {
		console.log(i);
	}, i * 1000);
}