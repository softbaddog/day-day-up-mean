function Accommodation(defaults) {
	defaults = defaults || {};

	this.floors = defaults.floors || 0;
	this.rooms = defaults.rooms || 0;
	this.sharedEntrance = defaults.sharedEntrance || false;
}

Accommodation.prototype.isLocked = false;
Accommodation.prototype.lock = function() {
	this.isLocked = true;
};

var house = new Accommodation({
	floors: 2,
	rooms: 7
});

console.log(house.floors);
console.log(house.rooms);

house.lock();

console.log(house.isLocked);