function Accommodation(argument) {
	// body...
}

Accommodation.prototype = {
	floors: 0,
	rooms: 0,
	sharedEntrance: false,
	lock: function() {
		this.sharedEntrance = true;
	},
	unlock: function() {
		this.sharedEntrance = false;
	},
};

var house1 = new Accommodation();
var house2 = new Accommodation();

console.log(house1.floors);
console.log(house2.sharedEntrance);

house1.floors = 2;
house2.sharedEntrance = true;

house1.unlock();
house2.lock();

Accommodation.prototype.alarm = function() {
	console.log('alarm,alarm，alarm，，，，');
};

console.log(house1.floors);
console.log(house2.sharedEntrance);

house1.alarm();