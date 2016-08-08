var house = {
	rooms: 7,
	sharedEntrance: false,
	lock: function() {},
	unlock: function() {}
};

console.log(house.rooms);
console.log(house.sharedEntrance);

house.lock();

house.rooms = 8;
house.floors = 2;

console.log(house.rooms);