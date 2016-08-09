function Accommodation() {
	this.isAlarmed = false;
}

Accommodation.prototype.alarm = function(note, time) {
	var message = "Alarm activated at " + time + " with the note: " + note;
	this.isAlarmed = true;
	console.log(message);
};

function House() {
	this.isLocked = false;
}

House.prototype = new Accommodation();

House.prototype.alarm = function() {
	this.isLocked = true;
	Accommodation.prototype.alarm.apply(this, arguments);
};

var myHouse = new House();
myHouse.alarm("Activating alarm", new Date());

console.log(myHouse.isLocked);