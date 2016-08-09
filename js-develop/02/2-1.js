/**
 * 一个用于定义各种类型住宅（accommodation）的类
 * @class Accommodation
 * @constructor
 */
var Accommodation = Class.create({
	isLocked: true,
	isAlarmed: true,
	lock: function() {
		this.isLocked = true;
	},
	unlock: function() {
		this.isLocked = false;
	},
	initialize: function() {
		this.unlock();
	}
});