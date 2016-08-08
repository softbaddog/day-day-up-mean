function Accommodation() {}

Accommodation.prototype.isLocked = false;
Accommodation.prototype.lock = function() {
	this.isLocked = true;
	console.log('locked');
	return this;
};
Accommodation.prototype.unlock = function() {
	this.isLocked = false;
	console.log('unlock');
	return this;
};
Accommodation.prototype.alarm = function() {
	console.log('alarmmmmmm...');
	return this;
};

var house = new Accommodation();

house.lock().alarm().unlock();