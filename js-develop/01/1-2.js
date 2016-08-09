function Accommodation() {
	// body...
}

Accommodation.prototype.floors = 0;
Accommodation.prototype.rooms = 0;
Accommodation.prototype.sharedEntrance = false;

Accommodation.prototype.lock = function() {};
Accommodation.prototype.unlock = function() {};


var house1 = new Accommodation();
var house2 = new Accommodation();

console.log(house1.floors);
console.log(house1.sharedEntrance);

house1.floors = 2;
house2.sharedEntrance = true;

house1.unlock();
house2.lock();

console.log(house1.floors);
console.log(house2.floors);