function Accommodation() {}

Accommodation.prototype.lock = function() {};
Accommodation.prototype.unlock = function() {};

function House(defaults) {
	defaults = defaults || {};

	this.floors = 2;
	this.rooms = defaults.rooms || 7;
}

House.prototype = new Accommodation();

House.prototype.constructor = House;

var myHouse = new House();

var myNeighorsHouse = new House({
	rooms: 8
});

console.log(myHouse.rooms);
console.log(myNeighorsHouse.rooms);

myHouse.lock();
myNeighorsHouse.unlock();

console.log(myHouse.constructor === House);
console.log(myHouse.constructor === Accommodation);