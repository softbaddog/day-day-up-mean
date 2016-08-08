function Accommodation() {
	this.floors = 0;
	this.isLocked = false;
}

Accommodation.prototype.lock = function() {
	this.isLocked = true;
};

Accommodation.prototype.unlock = function() {
	this.isLocked = false;
};

var house = new Accommodation();

house.lock();

console.log(house.isLocked);