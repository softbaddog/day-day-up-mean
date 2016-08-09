var Accommodation = (function() {
	function Accommodation() {}

	var _isLocked = false;
	var _isAlarmed = false;
	var _alarmMessage = 'Alarm activated!';

	function _alarm() {
		_isAlarmed = true;
		console.log(_alarmMessage);
	}

	function _disableAlarm() {
		_isAlarmed = false;
	}

	Accommodation.prototype.lock = function() {
		_isLocked = true;
		_alarm();
	};

	Accommodation.prototype.unlock = function() {
		_isLocked = false;
		_disableAlarm();
	};

	Accommodation.prototype.getIsLocked = function() {
		return _isLocked;
	};

	Accommodation.prototype.setAlarmMessage = function(message) {
		_alarmMessage = message;
	};

	return Accommodation;
}());

var house = Accommodation();
house.lock();

// house._alarm();

// console.log(house._isLocked);

house.getIsLocked();

house.setAlarmMessage('The alarm is now activated!');

house.lock();