function Accommdation() {}

Accommdation.prototype.lock = function() {};
Accommdation.prototype.unlock = function() {};

function House(defaults) {
	defaults = defaults || {};

	this.floors = 2;
	this.rooms = defaults.rooms || 0;
}

House.prototype = new Accommodation();

House.prototype.constructor = House;