function Accommodation(floors, rooms, sharedEntrance) {
	this.floors = floors || 0;
	this.rooms = rooms || 0;
	this.sharedEntrance = sharedEntrance || false;
}

Accommodation.prototype.isLocked = false;
Accommodation.prototype.lock = function() {
	this.isLocked = true;
};

var house = new Accommodation(2, 7);

console.log(house.floors);
console.log(house.rooms);

house.lock();

console.log(house.isLocked);